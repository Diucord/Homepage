// src/components/CanvasRain/CanvasRain.tsx
import { useEffect, useRef } from "react";
import { initRenderer } from "./initRenderer";
import { useMatrixRain } from "./useMatrixRain.ts";

export default function CanvasRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { updateWorld, renderWorld, bufferContext } = useMatrixRain();

  useEffect(() => {
    if (!canvasRef.current) return;

    const { regl, spriteTexture, quadCommand, stop } = initRenderer(
      canvasRef.current,
      bufferContext
    );

    let last = performance.now();
    let rafId = 0;

    const loop = () => {
      const now = performance.now();
      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;

      updateWorld(delta);
      renderWorld(delta);

      // GPU 업데이트
      regl.poll();
      spriteTexture.subimage(bufferContext, 8, 8);

      quadCommand();

      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      stop();
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
}
