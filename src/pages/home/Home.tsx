import * as S from "./Home.style";

import MAIN_IMG from "../../assets/images/IMG_4505.jpg";
import ScrollConfetti from "../../components/ui/ScrollConfetti";
import { useEffect, useState } from "react";
import Introduce from "./components/Introduce";
import Invitation from "./components/Invitation";
import Calendar from "./components/Calendar";
import Dday from "./components/Dday";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Notice from "./components/Notice";
import Account from "./components/Account";

export default function Home() {
  const [confettiCount, setConfettiCount] = useState(0);

  const handleImageLoad = () => {
    setTimeout(() => {
      setConfettiCount((c) => c + 1);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (rect.top < window.innerHeight) {
        hasFiredRef.current = true;

        setTimeout(() => {
          setConfettiCount((c) => c + 1);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Wrap>
      <S.ImageWrapper>
        <S.Image src={MAIN_IMG} alt="" onLoad={handleImageLoad} />
        <div className="top_wrapper">We're getting Married</div>
        <div className="bottom_wrapper">
          <div className="bottom_wrap">
            <span>TAEHYUNG</span>
            <div className="date">
              <span>2026.11.1</span>
            </div>
            <span>WONYOUNG</span>
          </div>
          <div className="desc">
            <p>
              That is the true season of love, when we believe that we alone can
              love,
            </p>
            <p>
              that no one could ever have loved so before us, and that no one
              will love in the same way after us.
            </p>
          </div>
        </div>

        <ScrollConfetti trigger={confettiCount} />
      </S.ImageWrapper>
      {/* 초대합니다 */}
      <Invitation />
      {/* 연락하기 */}
      {/* 신랑신부 소개 */}
      {/* <Introduce /> */}
      {/* 캘린더 */}
      <Calendar />
      {/* D-day */}
      <Dday />
      {/* 갤러리 */}
      <Gallery />
      {/* 오시는길 */}
      <Location />
      {/* 안내사항 - 포토부스 */}
      <Notice />
      {/* 마음 전하실 곳 */}
      <Account />
    </S.Wrap>
  );
}
