// src/components/CanvasRain/useMatrixRain.ts
export function useMatrixRain() {
  const charW = 6;
  const charH = 14;
  const cols = 80;
  const rows = 24;

  const canvas = document.createElement("canvas");
  canvas.width = cols * charW;
  canvas.height = rows * charH;

  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const trails = Array.from({ length: 40 }).map(() => ({
    x: Math.floor(Math.random() * cols),
    y: 0,
    vy: 5 + Math.random() * 15,
  }));

  let fade = 0;

  function updateWorld(delta: number) {
    trails.forEach((t) => {
      t.y += t.vy * delta;
      if (t.y > rows) {
        t.y = 0;
        t.x = Math.floor(Math.random() * cols);
      }
    });
  }

  function renderWorld(delta: number) {
    fade -= delta;
    if (fade < 0) {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      fade += 0.2;
    }

    ctx.font = `13px Inconsolata`;
    ctx.textAlign = "center";

    trails.forEach((trail) => {
      const char = String.fromCharCode(0x30 + Math.random() * 40);
      ctx.fillStyle = "#77ff99";
      ctx.fillText(
        char,
        (trail.x + 0.5) * charW,
        trail.y * charH + charH
      );
    });
  }

  return {
    updateWorld,
    renderWorld,
    bufferContext: ctx,
  };
}
