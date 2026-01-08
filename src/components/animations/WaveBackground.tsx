"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      lineWidth: number
    ) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;

      for (let x = 0; x <= canvas.width; x += 5) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 0.7) * amplitude * 0.5;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height * 0.5;

      // Draw multiple waves with different properties
      drawWave(centerY, 30, 0.005, 0.02, "rgba(139, 92, 246, 0.3)", 2);
      drawWave(centerY + 20, 25, 0.007, 0.025, "rgba(139, 92, 246, 0.2)", 1.5);
      drawWave(centerY - 20, 35, 0.004, 0.015, "rgba(99, 102, 241, 0.25)", 2);
      drawWave(centerY + 40, 20, 0.008, 0.03, "rgba(99, 102, 241, 0.15)", 1);
      drawWave(centerY - 40, 40, 0.003, 0.018, "rgba(139, 92, 246, 0.15)", 1.5);

      time++;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60"
      style={{ pointerEvents: "none" }}
    />
  );
}
