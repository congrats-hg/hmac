// 파티클 시스템 모듈
// Particle System Module

import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.particleSystem = null;
    this.currentEffect = 'rain';
    
    this.setupLighting();
  }

  setupLighting() {
    // 환경 조명
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    this.scene.add(ambientLight);

    // 방향성 조명
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
  }

  createEffect(effectType, text) {
    this.clearParticles();
    this.currentEffect = effectType;

    switch(effectType) {
      case 'rain':
        this.createRainEffect(text);
        break;
      case 'snow':
        this.createSnowEffect(text);
        break;
      case 'fire':
        this.createFireEffect(text);
        break;
    }
  }

  createRainEffect(text) {
    const particleCount = 1000 + text.length * 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // 위치 설정
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = Math.random() * 10 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // 속도 설정 (비 효과)
      velocities[i3] = (Math.random() - 0.5) * 0.1;
      velocities[i3 + 1] = -Math.random() * 0.3 - 0.1;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;

      // 색상 설정 (파란색 계열)
      colors[i3] = 0.3 + Math.random() * 0.3;     // R
      colors[i3 + 1] = 0.5 + Math.random() * 0.4; // G
      colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
  }

  createSnowEffect(text) {
    const particleCount = 800 + text.length * 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // 위치 설정
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = Math.random() * 10 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // 속도 설정 (눈 효과 - 더 느리고 흔들림)
      velocities[i3] = (Math.random() - 0.5) * 0.05;
      velocities[i3 + 1] = -Math.random() * 0.1 - 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.05;

      // 색상 설정 (흰색 계열)
      const brightness = 0.8 + Math.random() * 0.2;
      colors[i3] = brightness;     // R
      colors[i3 + 1] = brightness; // G
      colors[i3 + 2] = brightness; // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
  }

  createFireEffect(text) {
    const particleCount = 600 + text.length * 60;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // 위치 설정 (아래쪽에서 시작)
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = Math.random() * 2 - 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;

      // 속도 설정 (불 효과 - 위로 올라감)
      velocities[i3] = (Math.random() - 0.5) * 0.1;
      velocities[i3 + 1] = Math.random() * 0.2 + 0.1;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;

      // 색상 설정 (빨강-주황-노랑 계열)
      const heat = Math.random();
      colors[i3] = 1.0;                          // R
      colors[i3 + 1] = 0.3 + heat * 0.7;        // G
      colors[i3 + 2] = heat * 0.5;              // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
  }

  update() {
    if (!this.particleSystem) return;

    const positions = this.particleSystem.geometry.attributes.position.array;
    const velocities = this.particleSystem.geometry.attributes.velocity.array;
    const colors = this.particleSystem.geometry.attributes.color.array;

    const particleCount = positions.length / 3;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // 위치 업데이트
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      // 경계 확인 및 재설정
      this.resetParticleIfNeeded(i, positions, velocities, colors);
    }

    // 파티클 시스템 업데이트
    this.particleSystem.geometry.attributes.position.needsUpdate = true;
    this.particleSystem.rotation.y += 0.001;
  }

  resetParticleIfNeeded(index, positions, velocities, colors) {
    const i3 = index * 3;

    let shouldReset = false;

    switch(this.currentEffect) {
      case 'rain':
      case 'snow':
        if (positions[i3 + 1] < -5) shouldReset = true;
        break;
      case 'fire':
        if (positions[i3 + 1] > 8) shouldReset = true;
        break;
    }

    if (shouldReset) {
      // 파티클 위치 재설정
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      switch(this.currentEffect) {
        case 'rain':
        case 'snow':
          positions[i3 + 1] = Math.random() * 5 + 10;
          break;
        case 'fire':
          positions[i3 + 1] = Math.random() * 2 - 5;
          break;
      }
    }
  }

  changeEffect(newEffect) {
    this.currentEffect = newEffect;
    // 기존 파티클을 새로운 효과로 전환하는 애니메이션을 여기에 추가할 수 있습니다
  }

  createAIEffect(aiResponse) {
    // AI 응답에 따른 특별한 파티클 효과
    console.log('AI 효과 생성:', aiResponse);
    
    // 임시로 화려한 폭발 효과 생성
    this.createExplosionEffect();
  }

  createExplosionEffect() {
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // 중심에서 시작
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;

      // 랜덤한 방향으로 퍼짐
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const speed = Math.random() * 0.3 + 0.1;

      velocities[i3] = Math.sin(theta) * Math.cos(phi) * speed;
      velocities[i3 + 1] = Math.cos(theta) * speed;
      velocities[i3 + 2] = Math.sin(theta) * Math.sin(phi) * speed;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xffd700,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });

    const explosionSystem = new THREE.Points(geometry, material);
    this.scene.add(explosionSystem);

    // 폭발 효과 애니메이션
    let life = 1.0;
    const animate = () => {
      if (life > 0) {
        const positions = explosionSystem.geometry.attributes.position.array;
        const velocities = explosionSystem.geometry.attributes.velocity.array;

        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];

          // 중력 효과
          velocities[i + 1] -= 0.01;
        }

        explosionSystem.geometry.attributes.position.needsUpdate = true;
        explosionSystem.material.opacity = life;
        life -= 0.02;

        requestAnimationFrame(animate);
      } else {
        this.scene.remove(explosionSystem);
        explosionSystem.geometry.dispose();
        explosionSystem.material.dispose();
      }
    };
    animate();
  }

  clear() {
    this.clearParticles();
  }

  clearParticles() {
    if (this.particleSystem) {
      this.scene.remove(this.particleSystem);
      this.particleSystem.geometry.dispose();
      this.particleSystem.material.dispose();
      this.particleSystem = null;
    }
  }
}
