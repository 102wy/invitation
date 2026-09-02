import { useEffect, useState } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 이미지 클릭
  const handleImageClick = (idx: number) => {
    setSelectedIndex(idx);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  // 이전 이미지
  const handlePrev = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  // 다음 이미지
  const handleNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  // 키보드 좌우 이동
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      }

      if (e.key === "ArrowRight") {
        handleNext();
      }

      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 모달 열렸을 때 body 스크롤 방지
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <S.Wrap>
      <Line />

      <MainTitle en="GALLERY" ko="갤러리" mt="30px" />

      <ul>
        {images.slice(0, showAll ? images.length : 6).map((src, idx) => (
          <li key={idx}>
            <img
              src={src}
              alt=""
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => handleImageClick(idx)}
            />
          </li>
        ))}
      </ul>

      {images.length > 6 && !showAll && (
        <button className="more" onClick={() => setShowAll(true)}>
          더보기
        </button>
      )}

      {/* 이미지 모달 */}
      {selectedIndex !== null && (
        <S.ModalOverlay onClick={handleCloseModal} onContextMenu={(e) => e.preventDefault()}>
          {/* 이전 버튼 */}
          <S.Arrow
            className="prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="이전 이미지"
          >
            ‹
          </S.Arrow>

          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={handleCloseModal} aria-label="닫기">
              ×
            </button>

            <img
              src={images[selectedIndex]}
              alt=""
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />

            <S.ImageCount>
              {selectedIndex + 1} / {images.length}
            </S.ImageCount>
          </S.ModalContent>

          {/* 다음 버튼 */}
          <S.Arrow
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="다음 이미지"
          >
            ›
          </S.Arrow>
        </S.ModalOverlay>
      )}
    </S.Wrap>
  );
};

export default Gallery;
