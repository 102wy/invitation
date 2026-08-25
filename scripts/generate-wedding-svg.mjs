import opentype from "opentype.js";
import fs from "fs";

const FONT_PATH = "./src/assets/fonts/Blacksword.otf";
const OUTPUT_PATH = "./src/assets/weddingText.ts";

const text = "We're getting Married";

const fontBuffer = fs.readFileSync(FONT_PATH);
const font = opentype.parse(fontBuffer.buffer);

const fontSize = 60;
const padding = 10;

let x = padding;

const paths = [];

for (const char of text) {
  if (char === " ") {
    x += font.getAdvanceWidth(" ", fontSize);
    continue;
  }

  const glyph = font.charToGlyph(char);

  const path = glyph.getPath(x, fontSize, fontSize);

  paths.push({
    char,
    d: path.toPathData(2),
    path,
  });

  x += glyph.advanceWidth * (fontSize / font.unitsPerEm);
}

// 전체 path의 실제 영역 계산
let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;

paths.forEach(({ path }) => {
  const box = path.getBoundingBox();

  minX = Math.min(minX, box.x1);
  minY = Math.min(minY, box.y1);
  maxX = Math.max(maxX, box.x2);
  maxY = Math.max(maxY, box.y2);
});

const width = Math.ceil(maxX - minX + padding * 2);
const height = Math.ceil(maxY - minY + padding * 2);

// 전체 path를 viewBox 안으로 이동
const offsetX = padding - minX;
const offsetY = padding - minY;

const svg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 ${width} ${height}"
>
${paths
  .map(({ path }, index) => {
    // path 좌표 이동
    const d = path.toPathData(2).replace(/([MLCQZ])([^MLCQZ]*)/g, (match, command, coords) => {
      return match;
    });

    return `
  <path
    class="letter letter-${index}"
    d="${d}"
    pathLength="1"
  />
`;
  })
  .join("")}
</svg>
`;

fs.mkdirSync("./src/assets", { recursive: true });

fs.writeFileSync(OUTPUT_PATH, `export const weddingSvg = ${JSON.stringify(svg)};`);

console.log(`Generated: ${OUTPUT_PATH}`);
console.log(`Width: ${width}px`);
console.log(`Height: ${height}px`);
console.log(`Characters: ${paths.length}`);
