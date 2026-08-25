import styled from "styled-components";
import { useMemo } from "react";

type Shape = "diamond" | "square" | "curl" | "spiral";

type Piece = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  rotate: number;
  color: string;
  shape: Shape;
  opacity: number;
};

// const COLORS = [
//   "oklch(0.79 0.13 191)",
//   "oklch(0.65 0.24 350)",
//   "oklch(0.88 0.16 92)",
//   "oklch(0.52 0.21 262)",
// ];

const COLORS = ["rgba(255,255,255,0.8)"];

const SHAPES: Shape[] = ["curl", "spiral", "curl", "diamond", "square", "spiral"];

const makePieces = (count: number): Piece[] => {
  return Array.from({ length: count }, (_, i) => {
    const r = (n: number) => (((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1) + 1) % 1;

    return {
      left: r(1) * 100,
      size: 6 + r(2) * 8,
      delay: -r(3) * 14,
      duration: 9 + r(4) * 12,
      drift: (r(5) - 0.5) * 160,
      rotate: r(6) * 360,
      color: COLORS[Math.floor(r(7) * COLORS.length)] ?? COLORS[0],
      shape: SHAPES[Math.floor(r(8) * SHAPES.length)] ?? "curl",
      opacity: 0.18 + r(9) * 0.42,
    };
  });
};

const Curl = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg
      width={size * 1.6}
      height={size * 3}
      viewBox="0 0 32 60"
      fill="none"
      style={{
        display: "block",
        overflow: "visible",
      }}
    >
      <path
        d="M16 1C4 8 28 15 16 22C4 29 28 36 16 43C4 50 28 55 16 59"
        stroke={color}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
};

const Spiral = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg
      width={size * 1.8}
      height={size * 1.8}
      viewBox="0 0 40 40"
      fill="none"
      style={{
        display: "block",
        overflow: "visible",
      }}
    >
      <path
        d="M20 20c0-3 4-3 4 0s-6 5-6 0 9-8 9 0-12 11-12 0 15-14 15 1"
        stroke={color}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

const ConfettiBackground = ({ count = 44 }: { count?: number }) => {
  const pieces = useMemo(() => makePieces(count), [count]);

  return (
    <Confetti className="confetti-background">
      {pieces.map((p, i) => {
        const style = {
          left: `${p.left}%`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          "--confetti-drift": `${p.drift}px`,
          "--confetti-spin": `${p.rotate}deg`,
          "--confetti-opacity": p.opacity,
        } as React.CSSProperties;

        if (p.shape === "curl" || p.shape === "spiral") {
          return (
            <span key={i} className="confetti-piece" data-shape={p.shape} style={style}>
              {p.shape === "curl" ? (
                <Curl color={p.color} size={p.size} />
              ) : (
                <Spiral color={p.color} size={p.size} />
              )}
            </span>
          );
        }

        return (
          <span
            key={i}
            className="confetti-piece"
            data-shape={p.shape}
            style={{
              ...style,
              width: p.size,
              height: p.size,
              background: p.color,
            }}
          />
        );
      })}
    </Confetti>
  );
};

export default ConfettiBackground;

const Confetti = styled.div`
  .confetti-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 999;
  }

  .confetti-piece {
    position: absolute;
    top: -80px;
    display: block;

    animation-name: confetti-fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    will-change: transform, opacity;
  }

  @keyframes confetti-fall {
    0% {
      transform: translate3d(0, -100px, 0) rotate(0deg);
      opacity: 0;
    }

    10% {
      opacity: var(--confetti-opacity);
    }

    90% {
      opacity: var(--confetti-opacity);
    }

    100% {
      transform: translate3d(var(--confetti-drift), calc(100vh + 150px), 0)
        rotate(calc(var(--confetti-spin) + 720deg));

      opacity: 0;
    }
  }
`;
