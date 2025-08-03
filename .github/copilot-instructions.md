# 비 - 한글 손 인터랙션 프로젝트 Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a hand gesture-based interactive web application that transforms falling Korean '비' (rain) characters into actual raindrops when touched by hand movements.

## Project Context
- **Purpose**: Real-time hand interaction with falling Korean characters using computer vision
- **Core Interaction**: '비' characters fall from top, transform to raindrops when hand touches them
- **Technologies**: JavaScript, WebGL (Three.js), MediaPipe Hands, Canvas 2D
- **Visual Theme**: Night sky background with falling Korean characters and physics-based raindrops

## Code Style Guidelines
- Use modern JavaScript (ES6+) with async/await
- Prefer functional programming patterns for particle systems
- Keep coordinate systems consistent (screen space vs. Three.js space)
- Use meaningful variable names with Korean context comments
- Optimize for real-time performance (60fps target)

## Key Components
- **Camera & Hand Detection**: MediaPipe Hands for real-time gesture recognition
- **Character Rendering**: Canvas 2D text to Three.js texture pipeline for Korean typography
- **Physics Simulation**: Individual particle systems for characters and raindrops
- **Collision Detection**: Distance-based collision between hand landmarks and characters
- **Transformation System**: Smooth character-to-raindrop conversion with particle spawning

## Technical Constraints
- **HTTPS Required**: Camera access needs secure context
- **Performance**: Must handle 20+ characters + 300+ raindrops simultaneously
- **Browser Compatibility**: Modern browsers with WebGL and MediaPipe support
- **Responsive**: Adapt to different screen sizes and orientations

## MediaPipe Integration
- Use hand landmarks (palm center + fingertips) for collision detection
- Handle camera initialization failures gracefully with mouse fallback
- Optimize hand detection frequency vs. rendering performance
- Maintain consistent coordinate transformation between camera and WebGL space

## Korean Typography Considerations
- Use Noto Sans KR for proper Hangul rendering
- Ensure '비' character visibility against dark backgrounds
- Maintain character proportions during scaling animations
- Consider different font weights for visual impact

## Animation & Physics
- Implement natural falling motion with slight variations
- Add subtle wind effects for character drift
- Use realistic raindrop physics (gravity + air resistance)
- Smooth transitions between character and raindrop states
- Manage particle lifecycle to prevent memory leaks
