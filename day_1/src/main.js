// 비 - 한글 손 인터랙션 프로젝트
import * as THREE from 'three';
// MediaPipe는 CDN에서 로드됨
// Camera는 CDN에서 로드됨

class RainInteraction {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.video = null;
    
    // 손 감지 관련
    this.hands = null;
    this.cameraUtils = null;
    this.handLandmarks = [];
    this.collisionPoints = []; // 충돌 감지용 주요 포인트들
    
    // '비' 글자들
    this.rainCharacters = [];
    this.rainDrops = [];
    
    // 손 위치 표시용 마커들
    this.handMarkers = [];
    
    // 성능 최적화를 위한 프레임 스킵
    this.frameSkipCounter = 0;
    this.frameSkipInterval = 2; // 3프레임마다 1번 손 인식
    
    // 화면 크기
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    this.init();
  }

  async init() {
    console.log('비 인터랙션 시작...');
    
    // WebGL 초기화
    this.setupWebGL();
    
    // 손 감지 초기화
    await this.setupHandDetection();
    
    // '비' 글자들 생성
    this.createRainCharacters();
    
    // 애니메이션 시작
    this.animate();
    
    console.log('초기화 완료!');
  }

  setupWebGL() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
    // Three.js Scene 설정
    this.scene = new THREE.Scene();
    
    // Camera 설정 (2D 작업을 위한 Orthographic)
    this.camera = new THREE.OrthographicCamera(
      -this.width / 2, this.width / 2,
      this.height / 2, -this.height / 2,
      -1000, 1000  // near와 far를 크게 설정
    );
    this.camera.position.z = 100; // 카메라를 앞으로 이동
    
    // Renderer 설정
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas,
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 0);
    
    // 윈도우 리사이즈
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      
      this.camera.left = -this.width / 2;
      this.camera.right = this.width / 2;
      this.camera.top = this.height / 2;
      this.camera.bottom = -this.height / 2;
      this.camera.updateProjectionMatrix();
      
      this.renderer.setSize(this.width, this.height);
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    });
  }

  async setupHandDetection() {
    try {
      // MediaPipe Hands 초기화
      this.hands = new window.Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
      });

      this.hands.setOptions({
        maxNumHands: 1, // 손 개수 1개로 제한
        modelComplexity: 0, // 모델 복잡도 최소화
        minDetectionConfidence: 0.7, // 감지 정확도 높임
        minTrackingConfidence: 0.5
      });

      this.hands.onResults((results) => {
        this.onHandResults(results);
      });

      // 카메라 설정
      this.video = document.getElementById('video');
      this.cameraUtils = new window.Camera(this.video, {
        onFrame: async () => {
          // 프레임 스킵으로 성능 최적화
          this.frameSkipCounter++;
          if (this.frameSkipCounter % this.frameSkipInterval === 0) {
            await this.hands.send({ image: this.video });
          }
        },
        width: this.width,
        height: this.height
      });

      await this.cameraUtils.start();
      
    } catch (error) {
      console.error('손 감지 초기화 실패:', error);
      
      // 마우스 이벤트로 대체
      this.setupMouseEvents();
    }
  }

  setupMouseEvents() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // 마우스 위치를 손 위치로 사용
      const mousePoint = {
        x: x / this.width,
        y: y / this.height
      };
      
      this.handLandmarks = [mousePoint];
      this.collisionPoints = [mousePoint]; // 충돌 감지용
      
      // 마우스 모드임을 표시
      
      // 마우스 위치에 마커 생성
      this.clearHandMarkers();
      this.createMouseMarker(x, y);
    });
  }

  createMouseMarker(mouseX, mouseY) {
    const geometry = new THREE.CircleGeometry(20, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00, // 노란색으로 마우스 표시
      transparent: true,
      opacity: 0.6
    });
    
    const marker = new THREE.Mesh(geometry, material);
    
    // 마우스 좌표를 화면 좌표로 변환
    const x = mouseX - (this.width / 2);
    const y = -(mouseY - (this.height / 2));
    
    marker.position.set(x, y, 10); // z=10으로 설정
    
    this.scene.add(marker);
    this.handMarkers.push(marker);
  }

  onHandResults(results) {
    this.handLandmarks = [];
    this.collisionPoints = []; // 충돌 포인트도 초기화
    
    // 기존 손 마커들 제거
    this.clearHandMarkers();
    
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      for (const landmarks of results.multiHandLandmarks) {
        // 모든 21개의 손 관절점을 저장
        this.handLandmarks = landmarks;
        
        // 충돌 감지용 주요 포인트들 (별도 배열)
        this.collisionPoints = [
          landmarks[9],  // 손바닥 중심
          landmarks[8],  // 검지
          landmarks[12], // 중지
          landmarks[16], // 약지
          landmarks[20]  // 소지
        ];
      }
      
      // 간단한 손 마커 표시 (성능 최적화)
      this.createSimpleHandMarkers();
    }
    // else 블록 제거 - 이미 위에서 clearHandMarkers() 호출함
  }

  createSimpleHandMarkers() {
    if (!this.collisionPoints || this.collisionPoints.length === 0) return;

    // 충돌 감지 포인트들만 간단히 표시 (화면 내에 있는 것만)
    this.collisionPoints.forEach((landmark, index) => {
      // MediaPipe 좌표를 화면 좌표로 변환 (X축 뒤집기로 거울 모드 해제)
      const x = ((1 - landmark.x) * this.width) - (this.width / 2);
      const y = -(landmark.y * this.height) + (this.height / 2);
      
      // 화면 경계 체크 - 화면 내에 있는 마커만 표시
      const isInBounds = (
        x >= -this.width / 2 && x <= this.width / 2 &&
        y >= -this.height / 2 && y <= this.height / 2
      );
      
      if (isInBounds) {
        const geometry = new THREE.CircleGeometry(15, 8); // 낮은 해상도 원형
        const material = new THREE.MeshBasicMaterial({
          color: 0x00ff00,
          transparent: true,
          opacity: 0.8
        });
        
        const marker = new THREE.Mesh(geometry, material);
        marker.position.set(x, y, 10);
        
        this.scene.add(marker);
        this.handMarkers.push(marker);
      }
    });
  }

  clearHandMarkers() {
    this.handMarkers.forEach(marker => {
      this.scene.remove(marker);
      marker.geometry.dispose();
      marker.material.dispose();
    });
    this.handMarkers = [];
  }

  createRainCharacters() {
    // '비' 글자들을 화면 상단에 무작위로 생성
    for (let i = 0; i < 20; i++) {
      this.createRainCharacter();
    }
  }

  createRainCharacter() {
    // Canvas 2D로 '비' 글자 텍스처 생성
    const textCanvas = document.createElement('canvas');
    const textCtx = textCanvas.getContext('2d');
    textCanvas.width = 128;
    textCanvas.height = 128;
    
    // '비' 글자 그리기
    textCtx.font = 'bold 80px Noto Sans KR';
    textCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    textCtx.textAlign = 'center';
    textCtx.textBaseline = 'middle';
    textCtx.fillText('비', 64, 64);
    
    // Three.js 텍스처로 변환
    const texture = new THREE.CanvasTexture(textCanvas);
    
    const geometry = new THREE.PlaneGeometry(60, 60);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    // 랜덤 위치 설정
    mesh.position.x = (Math.random() - 0.5) * this.width;
    mesh.position.y = this.height / 2 + Math.random() * 200;
    mesh.position.z = 0; // z=0으로 설정
    
    // 떨어지는 속도
    mesh.userData = {
      fallSpeed: Math.random() * 2 + 1,
      originalSize: 60,
      isTransforming: false
    };
    
    this.scene.add(mesh);
    this.rainCharacters.push(mesh);
  }

  checkHandCollision(character) {
    if (!this.collisionPoints || this.collisionPoints.length === 0) return false;
    
    const charX = character.position.x + this.width / 2;
    const charY = -character.position.y + this.height / 2;
    
    for (const landmark of this.collisionPoints) {
      // X축 뒤집기로 거울 모드 해제
      const handX = (1 - landmark.x) * this.width; // X축 뒤집기
      const handY = landmark.y * this.height;
      
      const distance = Math.sqrt(
        Math.pow(charX - handX, 2) + Math.pow(charY - handY, 2)
      );
      
      if (distance < 80) { // 충돌 범위
        return true;
      }
    }
    
    return false;
  }

  update() {
    // '비' 글자들 업데이트
    for (let i = this.rainCharacters.length - 1; i >= 0; i--) {
      const char = this.rainCharacters[i];
      
      // 아래로 떨어뜨리기
      char.position.y -= char.userData.fallSpeed;
      
      // 손과의 충돌 검사
      if (this.checkHandCollision(char)) {
        this.transformToRainDrops(char);
        continue;
      }
      
      // 화면 아래로 사라지면 다시 위에서 시작
      if (char.position.y < -this.height / 2 - 100) {
        char.position.y = this.height / 2 + Math.random() * 200;
        char.position.x = (Math.random() - 0.5) * this.width;
      }
    }
    
    // 빗방울들 업데이트
    for (let i = this.rainDrops.length - 1; i >= 0; i--) {
      const drop = this.rainDrops[i];
      
      drop.position.y -= drop.userData.fallSpeed;
      drop.position.x += drop.userData.sideSpeed;
      drop.userData.life -= 0.01;
      
      drop.material.opacity = drop.userData.life;
      
      // 생명이 다하거나 화면 밖으로 나가면 제거
      if (drop.userData.life <= 0 || drop.position.y < -this.height / 2 - 100) {
        this.scene.remove(drop);
        this.rainDrops.splice(i, 1);
      }
    }
  }

  transformToRainDrops(character) {
    if (character.userData.isTransforming) return;
    character.userData.isTransforming = true;
    
    // '비' 글자를 빗방울들로 분산
    const dropCount = 15;
    
    for (let i = 0; i < dropCount; i++) {
      this.createRainDrop(
        character.position.x + (Math.random() - 0.5) * 100,
        character.position.y + (Math.random() - 0.5) * 50
      );
    }
    
    // 원래 글자 제거
    this.scene.remove(character);
    const index = this.rainCharacters.indexOf(character);
    if (index > -1) {
      this.rainCharacters.splice(index, 1);
    }
    
    // 새로운 '비' 글자 생성
    setTimeout(() => {
      this.createRainCharacter();
    }, 2000);
  }

  createRainDrop(x, y) {
    const geometry = new THREE.SphereGeometry(2, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4A90E2,
      transparent: true,
      opacity: 0.8
    });
    
    const drop = new THREE.Mesh(geometry, material);
    drop.position.set(x, y, -5); // z=-5로 설정하여 손 골격 뒤에 표시
    
    drop.userData = {
      fallSpeed: Math.random() * 5 + 3,
      sideSpeed: (Math.random() - 0.5) * 2,
      life: 1.0
    };
    
    this.scene.add(drop);
    this.rainDrops.push(drop);
  }

  update() {
    // '비' 글자들 업데이트
    for (let i = this.rainCharacters.length - 1; i >= 0; i--) {
      const char = this.rainCharacters[i];
      
      // 아래로 떨어뜨리기
      char.position.y -= char.userData.fallSpeed;
      
      // 손과의 충돌 검사
      if (this.checkHandCollision(char)) {
        this.transformToRainDrops(char);
        continue;
      }
      
      // 화면 아래로 사라지면 다시 위에서 시작
      if (char.position.y < -this.height / 2 - 100) {
        char.position.y = this.height / 2 + Math.random() * 200;
        char.position.x = (Math.random() - 0.5) * this.width;
      }
    }
    
    // 빗방울들 업데이트
    for (let i = this.rainDrops.length - 1; i >= 0; i--) {
      const drop = this.rainDrops[i];
      
      drop.position.y -= drop.userData.fallSpeed;
      drop.position.x += drop.userData.sideSpeed;
      drop.userData.life -= 0.01;
      
      drop.material.opacity = drop.userData.life;
      
      // 생명이 다하거나 화면 밖으로 나가면 제거
      if (drop.userData.life <= 0 || drop.position.y < -this.height / 2 - 100) {
        this.scene.remove(drop);
        this.rainDrops.splice(i, 1);
      }
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    // 손 마커 유효성 검사 (프레임 스킵과 관계없이 매 프레임 체크)
    this.validateHandMarkers();
    
    this.update();
    this.renderer.render(this.scene, this.camera);
  }

  validateHandMarkers() {
    // 충돌 포인트가 없거나 비어있으면 모든 손 마커 제거
    if (!this.collisionPoints || this.collisionPoints.length === 0) {
      if (this.handMarkers.length > 0) {
        this.clearHandMarkers();
      }
      return;
    }

    // 화면 밖으로 나간 마커들 제거
    for (let i = this.handMarkers.length - 1; i >= 0; i--) {
      const marker = this.handMarkers[i];
      const isOutOfBounds = (
        marker.position.x < -this.width / 2 - 50 || 
        marker.position.x > this.width / 2 + 50 ||
        marker.position.y < -this.height / 2 - 50 || 
        marker.position.y > this.height / 2 + 50
      );
      
      if (isOutOfBounds) {
        this.scene.remove(marker);
        marker.geometry.dispose();
        marker.material.dispose();
        this.handMarkers.splice(i, 1);
      }
    }
  }
}

// 애플리케이션 시작
new RainInteraction();
