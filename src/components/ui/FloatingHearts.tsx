import { useEffect, useState } from "react";
import styled from "styled-components";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 28,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * -20,
      opacity: 0.08 + Math.random() * 0.12,
    }));

    setHearts(generated);
  }, []);

  return (
    <Wrap className="floating-hearts">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="floating-heart__svg"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
      ))}
    </Wrap>
  );
};
export default FloatingHearts;

const Wrap = styled.div`
  position: relative;
  height: 100%;
  .floating-hearts {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .floating-heart {
    position: absolute;
    bottom: -40px;
    display: inline-block;
    color: #f47295;
    will-change: transform;
    animation: floating-heart 10s linear infinite;
  }

  .floating-heart__svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  @keyframes floating-heart {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-100vh);
    }
  }
`;
