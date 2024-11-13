// components/SplashScreen.js
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const SplashScreen = () => {
  const canvasRef = useRef(null);

  // Vertex shader
  const vert = `
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;
    varying vec2 vTexCoord;

    void main() {
      vTexCoord = aTexCoord;
      vec4 positionVec4 = vec4(aPosition, 1.0);
      positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
      gl_Position = positionVec4;
    }
  `;

  // Fragment shader
  const frag = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    varying vec2 vTexCoord;

    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution.xy;
      vec3 color = vec3(0.5 + 0.5 * cos(u_time + st.xyx + vec3(0,2,4)));
      gl_FragColor = vec4(color,1.0);
    }
  `;

  useEffect(() => {
    const sketch = (p) => {
      let theShader;

      p.preload = () => {
        theShader = new p5.Shader(p._renderer, vert, frag);
      };

      p.setup = () => {
        const { innerWidth: width, innerHeight: height } = window;
        p.createCanvas(width, height, p.WEBGL);
        p.noStroke();
      };

      p.draw = () => {
        p.shader(theShader);
        theShader.setUniform('u_resolution', [p.width, p.height]);
        theShader.setUniform('u_time', p.millis() / 1000.0);
        theShader.setUniform('u_mouse', [p.mouseX / p.width, p.map(p.mouseY, 0, p.height, p.height, 0) / p.height]);

        p.rect(0, 0, p.width, p.height); // Draw shader across the entire canvas
      };

      p.windowResized = () => {
        const { innerWidth: width, innerHeight: height } = window;
        p.resizeCanvas(width, height);
      };
    };

    const p5Instance = new p5(sketch, canvasRef.current);

    return () => p5Instance.remove();
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SplashScreen;
