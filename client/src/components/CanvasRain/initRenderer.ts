// src/components/CanvasRain/initRenderer.ts
import createREGL from "regl";

export function initRenderer(
  canvas: HTMLCanvasElement
) {
  const regl = createREGL({
    canvas,
    attributes: {
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true,
    },
  });

  const spriteTexture = regl.texture({
    width: 512,
    height: 256,
    mag: "linear",
  });

  // vec2 배열 형태가 regl에서 가장 안정적으로 작동함
  const quadBuffer = regl.buffer([
    [-1, -1],
    [ 1, -1],
    [-1,  1],
    [ 1,  1],
  ]);

  const quadCommand = regl({
    vert: `
      precision mediump float;
      attribute vec2 position;
      varying vec2 uvPosition;

      void main() {
        uvPosition = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,

    frag: `
      precision mediump float;
      varying vec2 uvPosition;
      uniform sampler2D sprite;

      void main() {
        gl_FragColor = texture2D(sprite, uvPosition);
      }
    `,

    attributes: {
      position: quadBuffer,
    },

    uniforms: {
      sprite: spriteTexture,
    },

    primitive: "triangle fan", // triangle strip → fan
    count: 4,
  });

  const stop = () => {
    try {
      quadBuffer.destroy();
      spriteTexture.destroy();
      regl.destroy();
    } catch (_) {}
  };

  return { regl, spriteTexture, quadCommand, stop };
}
