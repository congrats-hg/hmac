// 한글 렌더링 모듈
// Hangul Rendering Module

import * as THREE from 'three';

export class HangulRenderer {
  constructor(scene) {
    this.scene = scene;
    this.textMeshes = [];
    this.currentText = '';
    this.font = null;
    
    // 폰트 로더는 Three.js addons에서 가져와야 함
    this.loadFont();
  }

  async loadFont() {
    try {
      // FontLoader를 동적으로 import
      const { FontLoader } = await import('three/addons/loaders/FontLoader.js');
      const fontLoader = new FontLoader();
      
      // Three.js의 기본 폰트 로드
      this.font = await new Promise((resolve, reject) => {
        fontLoader.load(
          'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
          resolve,
          undefined,
          reject
        );
      });
      console.log('폰트 로드 성공');
    } catch (error) {
      console.warn('폰트 로드 실패, 기본 설정 사용:', error);
    }
  }

  renderText(text) {
    this.clearText();
    this.currentText = text;

    if (!text.trim()) return;

    // 각 문자를 개별적으로 렌더링
    const characters = Array.from(text);
    const spacing = 1.2;
    const startX = -(characters.length - 1) * spacing / 2;

    characters.forEach(async (char, index) => {
      await this.createCharacterMesh(char, startX + index * spacing, 0);
    });
  }

  async createCharacterMesh(character, x, y) {
    let geometry;
    
    if (this.font) {
      try {
        // TextGeometry를 동적으로 import
        const { TextGeometry } = await import('three/addons/geometries/TextGeometry.js');
        
        // 폰트가 로드된 경우 텍스트 지오메트리 사용
        geometry = new TextGeometry(character, {
          font: this.font,
          size: 0.8,
          height: 0.1,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.02,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5
        });
      } catch (error) {
        console.warn('TextGeometry 생성 실패, 박스 지오메트리 사용:', error);
        geometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
      }
    } else {
      // 폰트가 없는 경우 박스 지오메트리로 대체
      geometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
    }

    // 한글 특성에 따른 색상 결정
    const color = this.getCharacterColor(character);
    
    const material = new THREE.MeshPhongMaterial({
      color: color,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color(color).multiplyScalar(0.1)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, 0);
    
    // 애니메이션을 위한 초기 설정
    mesh.scale.setScalar(0);
    mesh.userData = {
      targetScale: 1,
      character: character,
      originalColor: color
    };

    this.scene.add(mesh);
    this.textMeshes.push(mesh);

    // 등장 애니메이션
    this.animateCharacterAppearance(mesh);
  }

  getCharacterColor(character) {
    // 한글 문자의 유니코드 범위에 따른 색상 결정
    const code = character.charCodeAt(0);
    
    if (code >= 0xAC00 && code <= 0xD7AF) {
      // 완성된 한글 음절
      const hue = ((code - 0xAC00) % 360) / 360;
      return new THREE.Color().setHSL(hue, 0.7, 0.6);
    } else if (code >= 0x1100 && code <= 0x11FF) {
      // 한글 자모
      return new THREE.Color(0x00ff88);
    } else {
      // 기타 문자
      return new THREE.Color(0xffffff);
    }
  }

  animateCharacterAppearance(mesh) {
    const animate = () => {
      if (mesh.scale.x < mesh.userData.targetScale) {
        mesh.scale.addScalar(0.05);
        mesh.rotation.y += 0.1;
        requestAnimationFrame(animate);
      } else {
        mesh.scale.setScalar(mesh.userData.targetScale);
        mesh.rotation.y = 0;
      }
    };
    animate();
  }

  update() {
    // 텍스트 메시들의 부드러운 회전 효과
    this.textMeshes.forEach((mesh, index) => {
      const time = Date.now() * 0.001;
      mesh.rotation.x = Math.sin(time + index * 0.5) * 0.1;
      mesh.position.y = Math.sin(time + index * 0.3) * 0.1;
    });
  }

  clear() {
    this.clearText();
  }

  clearText() {
    this.textMeshes.forEach(mesh => {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    });
    this.textMeshes = [];
  }

  // 특정 효과에 따른 텍스트 색상 변경
  applyEffect(effectType) {
    this.textMeshes.forEach((mesh, index) => {
      const material = mesh.material;
      
      switch(effectType) {
        case 'rain':
          material.color.setHex(0x4A90E2);
          material.emissive.setHex(0x001122);
          break;
        case 'snow':
          material.color.setHex(0xE8F4F8);
          material.emissive.setHex(0x112233);
          break;
        case 'fire':
          material.color.setHex(0xFF6B35);
          material.emissive.setHex(0x331100);
          break;
        default:
          material.color.copy(mesh.userData.originalColor);
          material.emissive.setHex(0x000000);
      }
    });
  }
}
