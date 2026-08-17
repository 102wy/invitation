import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/font.css";
import "./styles/reset.css";

import App from "./App.tsx";
import { theme } from "./styles/Theme.ts";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalstyle.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
