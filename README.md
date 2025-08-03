# 비 - 한글 손 인터랙션 프로젝트

![한글](https://img.shields.io/badge/한글-비-blue) ![WebGL](https://img.shields.io/badge/WebGL-Three.js-green) ![AI](https://img.shields.io/badge/AI-MediaPipe-orange) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

사용자의 손 움직임으로 한글 '비' 글자를 실제 빗방울로 변화시키는 인터랙티브 웹 애플리케이션입니다.

## 🌧️ 프로젝트 컨셉

화면에서 떨어지는 '비' 글자들이 사용자의 손 움직임과 만나는 순간, 문자가 실제 빗방울로 분산되어 자연스럽게 떨어지는 시적인 경험을 제공합니다.

## ✨ 핵심 기능

### � **한글 '비' 애니메이션**
- 화면 상단에서 '비' 글자들이 지속적으로 생성되어 아래로 떨어짐
- 각 글자는 개별적인 낙하 속도와 움직임을 가짐
- Three.js를 사용한 부드러운 2D 애니메이션

### 👋 **실시간 손 감지**
- **MediaPipe Hands**: 웹캠을 통한 정확한 손 위치 추적
- 손바닥과 다섯 손가락 끝점의 실시간 좌표 수집
- 브라우저에서 직접 실행되는 AI 기반 손 인식

### 💧 **물리적 변환 효과**
- 손과 '비' 글자가 충돌하는 순간 글자가 여러 개의 빗방울로 분산
- 각 빗방울은 개별적인 물리 법칙 적용 (중력, 측면 움직임)
- 자연스러운 투명도 감소와 생명주기 관리

### 🎨 **시각적 디자인**
- 깊은 밤하늘을 연상시키는 그라데이션 배경
- 한글 타이포그래피를 위한 Noto Sans KR 폰트
- 반투명 효과와 부드러운 애니메이션

## 🛠 기술 스택

- **Frontend**: Vanilla JavaScript (ES6+)
- **3D Graphics**: Three.js (WebGL)
- **AI/ML**: MediaPipe Hands
- **Camera**: MediaPipe Camera Utils
- **Build Tool**: Vite
- **Typography**: Noto Sans KR

## 🚀 설치 및 실행

```bash
# 프로젝트 클론
git clone [repository-url]
cd rain-hangul-interaction

# 의존성 설치
npm install

# 개발 서버 실행 (HTTPS 필요 - 카메라 접근을 위해)
npm run dev

# 프로덕션 빌드
npm run build
```

## 📖 사용법

1. **카메라 권한 허용**: 브라우저에서 웹캠 접근 권한을 허용하세요
2. **손 인식 대기**: 카메라가 활성화되면 손이 인식될 때까지 잠시 기다리세요
3. **상호작용**: 떨어지는 '비' 글자들에 손을 대면 빗방울로 변환됩니다
4. **지속적인 경험**: 새로운 '비' 글자들이 계속 생성되어 무한한 인터랙션 제공

## � 핵심 알고리즘

### 충돌 감지 시스템
```javascript
// 손과 글자 간의 거리 계산
const distance = Math.sqrt(
  Math.pow(charX - handX, 2) + Math.pow(charY - handY, 2)
);

// 80픽셀 이내 충돌 시 변환 트리거
if (distance < 80) {
  transformToRainDrops(character);
}
```

### 물리 시뮬레이션
```javascript
// 빗방울의 자연스러운 움직임
drop.position.y -= drop.userData.fallSpeed;  // 중력
drop.position.x += drop.userData.sideSpeed;  // 측면 바람
drop.userData.life -= 0.01;                  // 수명 감소
```

## 🌐 브라우저 지원

- **Chrome 80+** (권장)
- **Firefox 75+**
- **Safari 13+**
- **Edge 80+**

**중요**: 카메라 접근을 위해 HTTPS 또는 localhost에서만 실행 가능합니다.

## 🔧 기술적 특징

### MediaPipe 통합
- 브라우저 내에서 직접 실행되는 손 감지 AI
- 실시간 랜드마크 추출 (21개 손 관절점)
- 높은 정확도와 낮은 지연시간

### WebGL 최적화
- Three.js 2D 모드 사용으로 최적화된 성능
- Canvas 텍스처를 활용한 한글 렌더링
- 효율적인 파티클 시스템 관리

### 폴백 시스템
- 카메라 접근 실패 시 마우스 인터랙션으로 자동 전환
- 크로스 플랫폼 호환성 보장

## 🎨 디자인 철학

> **"문자가 자연이 되는 순간"**

이 프로젝트는 한글의 의미와 형태가 실제 자연 현상으로 변화하는 마법적 순간을 구현합니다:

- **직관적 상호작용**: 손으로 만지면 변화한다는 자연스러운 인터페이스
- **시적 은유**: '비'라는 글자가 실제 비가 되는 문학적 표현
- **기술의 투명성**: 복잡한 AI 기술이 자연스럽게 숨겨진 사용자 경험

## 🔮 확장 가능성

- [ ] 다른 한글 글자들 ('눈', '바람', '불' 등) 추가
- [ ] 소리 효과 및 햅틱 피드백
- [ ] 멀티 터치 및 제스처 인식
- [ ] AR/VR 환경으로의 확장
- [ ] 실시간 협업 기능

## 🤝 기여하기

한글의 아름다움과 최신 웹 기술의 융합을 통해 새로운 인터랙션 경험을 만들어갑니다.

1. Fork the Project
2. Create Feature Branch (`git checkout -b feature/NewInteraction`)
3. Commit Changes (`git commit -m 'Add new interaction'`)
4. Push to Branch (`git push origin feature/NewInteraction`)
5. Open Pull Request

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**"손끝에서 피어나는 한글의 마법을 경험해보세요"**

*기술과 문화가 만나는 지점에서 탄생한 새로운 형태의 디지털 아트입니다.*
