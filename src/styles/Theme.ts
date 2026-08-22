export const theme = {
  color: {
    // 상태
    muted: "oklch(95.5% .008 60)",
    mutedForeground: "oklch(53% .012 50)",

    accent: "oklch(93% .03 20)",
    accentForeground: "oklch(35% .04 20)",

    destructive: "oklch(57.7% .245 27.325)",
    destructiveForeground: "oklch(98.4% .003 247.858)",

    // UI
    border: "oklch(90% .008 60)",
    borderHover: "#b07676",
    input: "oklch(90% .008 60)",
    ring: "oklch(63% .09 18)",

    // 추가 컬러
    ink: "oklch(14% .004 60)",
    inkForeground: "oklch(97% .004 80)",
    blush: "oklch(86% .05 15)",

    // 기존 컬러
    main: "#846a46",
    secondary: "#43331c",
    gray: "#8e8e8e",
    red: "#d08c95",
    blue: "#7b92a4",
    background: "#f7f3f0",
    background2: "#f8f6f3",
  },

  font: {
    script: '"Italiana", serif',
    serifDisplay: '"Cormorant Garamond", serif',
    body: '"Noto Serif KR", serif',
  },

  radius: {
    default: "0.25rem",
  },

  media: {
    mobile: "420px",
  },

  layout: {
    mobileWidth: "420px",
  },
};

export type Theme = typeof theme;
