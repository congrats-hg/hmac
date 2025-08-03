// AI 상호작용 모듈
// AI Interaction Module

import * as tf from '@tensorflow/tfjs';

export class AIInteraction {
  constructor() {
    this.model = null;
    this.isModelLoaded = false;
    
    // 한글 감정 분석을 위한 간단한 키워드 맵
    this.emotionKeywords = {
      happy: ['기쁨', '행복', '즐거움', '웃음', '환희', '사랑', '좋아'],
      sad: ['슬픔', '아픔', '눈물', '우울', '외로움', '그리움'],
      angry: ['화', '분노', '짜증', '열받아', '악', '싫어'],
      peaceful: ['평화', '고요', '잔잔', '평온', '조용', '편안'],
      nature: ['비', '눈', '불', '바람', '하늘', '바다', '산', '꽃', '나무']
    };
  }

  async loadModel() {
    try {
      console.log('AI 모델 로딩 중...');
      
      // 실제 프로젝트에서는 훈련된 한글 감정 분석 모델을 로드
      // 여기서는 TensorFlow.js의 기본 모델을 시뮬레이션
      await tf.ready();
      
      // 간단한 더미 모델 생성 (실제로는 사전 훈련된 모델을 로드해야 함)
      this.model = tf.sequential({
        layers: [
          tf.layers.dense({ inputShape: [100], units: 64, activation: 'relu' }),
          tf.layers.dense({ units: 32, activation: 'relu' }),
          tf.layers.dense({ units: 5, activation: 'softmax' }) // 5가지 감정 카테고리
        ]
      });

      this.isModelLoaded = true;
      console.log('AI 모델 로딩 완료!');
    } catch (error) {
      console.warn('AI 모델 로딩 실패, 기본 분석 사용:', error);
      this.isModelLoaded = false;
    }
  }

  analyzeText(text) {
    if (!text || !text.trim()) return null;

    // 간단한 키워드 기반 감정 분석
    const analysis = {
      emotion: 'neutral',
      intensity: 0.5,
      keywords: [],
      characteristics: this.analyzeHangulCharacteristics(text)
    };

    // 각 감정 카테고리에 대한 키워드 매칭
    const emotionScores = {};
    
    Object.keys(this.emotionKeywords).forEach(emotion => {
      const keywords = this.emotionKeywords[emotion];
      let score = 0;
      
      keywords.forEach(keyword => {
        if (text.includes(keyword)) {
          score += 1;
          analysis.keywords.push(keyword);
        }
      });
      
      emotionScores[emotion] = score;
    });

    // 가장 높은 점수의 감정 선택
    const maxEmotion = Object.keys(emotionScores).reduce((a, b) =>
      emotionScores[a] > emotionScores[b] ? a : b
    );

    if (emotionScores[maxEmotion] > 0) {
      analysis.emotion = maxEmotion;
      analysis.intensity = Math.min(emotionScores[maxEmotion] / 3, 1.0);
    }

    console.log('텍스트 분석 결과:', analysis);
    return analysis;
  }

  analyzeHangulCharacteristics(text) {
    const chars = Array.from(text);
    const analysis = {
      totalChars: chars.length,
      hangulChars: 0,
      consonants: 0,
      vowels: 0,
      completeSyllables: 0
    };

    chars.forEach(char => {
      const code = char.charCodeAt(0);
      
      // 완성된 한글 음절 (가-힣)
      if (code >= 0xAC00 && code <= 0xD7AF) {
        analysis.hangulChars++;
        analysis.completeSyllables++;
      }
      // 한글 자음 (ㄱ-ㅎ)
      else if (code >= 0x3131 && code <= 0x314E) {
        analysis.hangulChars++;
        analysis.consonants++;
      }
      // 한글 모음 (ㅏ-ㅣ)
      else if (code >= 0x314F && code <= 0x3163) {
        analysis.hangulChars++;
        analysis.vowels++;
      }
    });

    return analysis;
  }

  async generateResponse(text) {
    const analysis = this.analyzeText(text);
    
    if (!analysis) {
      return { type: 'neutral', message: '입력을 인식할 수 없습니다.' };
    }

    // 감정에 따른 AI 응답 생성
    const responses = {
      happy: {
        type: 'celebration',
        message: `"${text}"에서 기쁨을 느꼈습니다! 황금빛 파티클로 축하합니다!`,
        effectColor: 0xffd700,
        effectType: 'sparkle'
      },
      sad: {
        type: 'comfort',
        message: `"${text}"의 슬픔을 이해합니다. 부드러운 파란색으로 위로를 전합니다.`,
        effectColor: 0x87ceeb,
        effectType: 'gentle'
      },
      angry: {
        type: 'calm',
        message: `"${text}"의 강한 감정을 느꼈습니다. 진정하는 초록빛을 보내드립니다.`,
        effectColor: 0x90ee90,
        effectType: 'soothing'
      },
      peaceful: {
        type: 'harmony',
        message: `"${text}"에서 평화로움을 느꼈습니다. 조화로운 보라빛으로 응답합니다.`,
        effectColor: 0xdda0dd,
        effectType: 'wave'
      },
      nature: {
        type: 'natural',
        message: `"${text}"에서 자연의 아름다움을 느꼈습니다. 자연스러운 효과로 표현합니다.`,
        effectColor: 0x98fb98,
        effectType: 'organic'
      }
    };

    const response = responses[analysis.emotion] || {
      type: 'neutral',
      message: `"${text}"를 분석했습니다. 기본 효과로 응답합니다.`,
      effectColor: 0xffffff,
      effectType: 'default'
    };

    // 한글 특성 정보 추가
    response.hangulInfo = analysis.characteristics;
    response.intensity = analysis.intensity;

    console.log('AI 응답 생성:', response);
    return response;
  }

  // 텍스트를 벡터로 변환 (실제 구현에서는 더 정교한 임베딩 사용)
  textToVector(text, vectorSize = 100) {
    const vector = new Array(vectorSize).fill(0);
    
    // 간단한 해시 기반 벡터화
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const index = charCode % vectorSize;
      vector[index] += 1;
    }

    // 정규화
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    if (magnitude > 0) {
      for (let i = 0; i < vector.length; i++) {
        vector[i] /= magnitude;
      }
    }

    return vector;
  }

  // 실시간 감정 추적
  trackEmotionalState(text) {
    const currentAnalysis = this.analyzeText(text);
    
    // 감정 변화 패턴 감지
    if (this.previousAnalysis) {
      const emotionChange = {
        from: this.previousAnalysis.emotion,
        to: currentAnalysis.emotion,
        intensityDelta: currentAnalysis.intensity - this.previousAnalysis.intensity
      };
      
      console.log('감정 변화 감지:', emotionChange);
      return emotionChange;
    }

    this.previousAnalysis = currentAnalysis;
    return null;
  }

  // 한글의 미적 특성 분석
  analyzeAestheticProperties(text) {
    const chars = Array.from(text);
    const properties = {
      symmetry: 0,        // 대칭성
      complexity: 0,      // 복잡도
      rhythm: 0,          // 리듬감
      visualBalance: 0    // 시각적 균형
    };

    chars.forEach(char => {
      const code = char.charCodeAt(0);
      
      if (code >= 0xAC00 && code <= 0xD7AF) {
        // 완성된 한글 음절의 미적 특성 분석
        const syllableIndex = code - 0xAC00;
        
        // 초성, 중성, 종성 분리
        const finalConsonant = syllableIndex % 28;
        const vowel = ((syllableIndex - finalConsonant) / 28) % 21;
        const consonant = ((syllableIndex - finalConsonant) / 28 - vowel) / 21;

        // 미적 특성 계산 (예시)
        properties.symmetry += this.calculateSymmetry(consonant, vowel, finalConsonant);
        properties.complexity += this.calculateComplexity(consonant, vowel, finalConsonant);
      }
    });

    // 평균화
    if (chars.length > 0) {
      properties.symmetry /= chars.length;
      properties.complexity /= chars.length;
      properties.rhythm = this.calculateRhythm(text);
      properties.visualBalance = this.calculateVisualBalance(text);
    }

    return properties;
  }

  calculateSymmetry(consonant, vowel, finalConsonant) {
    // 한글 자소의 대칭성 계산 (간단한 예시)
    const symmetricVowels = [0, 2, 4, 8, 13, 17]; // ㅏ, ㅓ, ㅗ, ㅜ 등
    return symmetricVowels.includes(vowel) ? 1 : 0.5;
  }

  calculateComplexity(consonant, vowel, finalConsonant) {
    // 자소의 복잡도 계산
    const complexConsonants = [2, 5, 6, 9, 11, 12, 14, 15, 18]; // ㄷ, ㅂ, ㅅ 등
    let complexity = 0.3;
    
    if (complexConsonants.includes(consonant)) complexity += 0.3;
    if (finalConsonant > 0) complexity += 0.4; // 받침이 있으면 복잡도 증가
    
    return Math.min(complexity, 1.0);
  }

  calculateRhythm(text) {
    // 텍스트의 리듬감 계산 (음절의 반복 패턴 등)
    const chars = Array.from(text);
    let rhythmScore = 0;
    
    for (let i = 1; i < chars.length; i++) {
      if (chars[i] === chars[i-1]) {
        rhythmScore += 0.2; // 반복
      }
    }
    
    return Math.min(rhythmScore, 1.0);
  }

  calculateVisualBalance(text) {
    // 시각적 균형감 계산
    const chars = Array.from(text);
    let balance = 0.5; // 기본값
    
    // 글자 수가 홀수면 중앙 집중적
    if (chars.length % 2 === 1) {
      balance += 0.2;
    }
    
    return Math.min(balance, 1.0);
  }
}
