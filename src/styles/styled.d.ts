import "styled-components";

import type { Theme } from "./theme";

declare module "styled-components" {
  interface DefaultTheme {
    color: Theme["color"];
    font: Theme["font"];
    radius: Theme["radius"];
    media: Theme["media"];
    layout: Theme["layout"];
  }
}
