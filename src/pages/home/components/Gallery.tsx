import { useState } from "react";

import * as S from "./Gallery.style";
import MainTitle from "../../../components/ui/MainTitle";
import Line from "../../../components/ui/Line";

const Gallery = () => {
  const imageModules = import.meta.glob<{ default: string }>(
    "/src/assets/images/Gallery/*.{png,jpg,jpeg,svg}",
    { eager: true },
  );

  const images = Object.values(imageModules).map((module) => module.default);

  const [showAll, setShowAll] = useState(false);

  return (
    <S.Wrap>
      <Line />
      <MainTitle en="GALLERY" ko="갤러리" mt="30px" />
      <ul>
        {images?.slice(0, showAll ? images.length : 6).map((src, idx) => {
          return (
            <li key={idx}>
              <img src={src} alt="" />
            </li>
          );
        })}
      </ul>

      {images && images.length > 6 && !showAll && (
        <button className="more" onClick={() => setShowAll(true)}>
          더보기
        </button>
      )}
    </S.Wrap>
  );
};

export default Gallery;
