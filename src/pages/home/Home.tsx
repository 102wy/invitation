import * as S from "./Home.style";

import MAIN_IMG from "../../assets/images/IMG_4505.jpg";
import Invitation from "./components/Invitation";
import Calendar from "./components/Calendar";
import Dday from "./components/Dday";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Notice from "./components/Notice";
import Account from "./components/Account";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";
import FloatingHearts from "../../components/ui/FloatingHearts";

export default function Home() {
  return (
    <S.Wrap>
      <S.ImageWrapper>
        <S.Image src={MAIN_IMG} alt="" />
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
      </S.ImageWrapper>
      {/* 초대합니다 */}
      <Invitation />
      {/* 연락하기 */}
      <Contact />
      {/* 신랑신부 소개 */}
      {/* <Introduce /> */}
      <div className="heart_wrapper">
        {/* 캘린더 */}
        <Calendar />
        {/* D-day */}
        <Dday />
        <FloatingHearts />
      </div>
      {/* 갤러리 */}
      <Gallery />
      {/* 오시는길 */}
      <Location />
      {/* 안내사항 - 포토부스 */}
      <Notice />
      {/* 마음 전하실 곳 */}
      <Account />
      {/* 마무리 */}
      <Bottom />
    </S.Wrap>
  );
}
