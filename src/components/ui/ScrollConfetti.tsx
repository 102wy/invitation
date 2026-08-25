import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  shape: "circle" | "square" | "star";
}

const COLORS = [
  "hsl(0, 60%, 65%)",
  "hsl(340, 50%, 72%)",
  "hsl(20, 70%, 80%)",
  "hsl(45, 80%, 70%)",
  "hsl(200, 60%, 70%)",
  "hsl(160, 50%, 65%)",
  "hsl(280, 50%, 72%)",
];

const ScrollConfetti = ({ trigger }: { trigger: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const createBurst = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < 80; i++) {
      const angle = (Math.PI * 2 * i) / 80 + Math.random() * 0.5;
      const speed = 3 + Math.random() * 8;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 4 + Math.random() * 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        shape: (["circle", "square", "star"] as const)[
          Math.floor(Math.random() * 3)
        ],
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    if (trigger === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 40 : 80;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;

      const speed = 3 + Math.random() * 8;

      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 4 + Math.random() * 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        shape: (["circle", "square", "star"] as const)[
          Math.floor(Math.random() * 3)
        ],
      });
    }

    particlesRef.current = particles;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const opacitySpeed = isMobile ? 0.015 : 0.008;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        p.vy += 0.15;
        p.vx *= 0.99;

        p.rotation += p.rotationSpeed;
        p.opacity -= opacitySpeed;

        if (p.opacity <= 0) return;

        alive = true;

        ctx.save();

        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();

          for (let j = 0; j < 5; j++) {
            const angle = (j * Math.PI * 2) / 5 - Math.PI / 2;

            const r = j % 2 === 0 ? p.size : p.size / 2;

            ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
          }

          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });

      if (alive) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();
  }, [trigger, createBurst]);

  return <Canvas ref={canvasRef} />;
};

export default ScrollConfetti;

const Canvas = styled.canvas`
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
`;
