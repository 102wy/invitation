import React, { useEffect, useState } from "react";

import * as S from "./Gallery.style";
import MainTitle from "../../../components/ui/MainTitle";
import Line from "../../../components/ui/Line";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 해당 경로의 이미지 파일들을 동적으로 import
    const imageModules = import.meta.glob(
      "/src/assets/images/Gallery/*.{png,jpg,jpeg,svg}",
      { eager: true },
    );

    // 모듈 객체에서 이미지 URL 배열 추출
    const loadedImages = Object.values(imageModules).map(
      (module) => module.default,
    );
    setImages(loadedImages);
  }, []);

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
