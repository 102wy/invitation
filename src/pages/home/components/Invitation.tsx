import { useEffect, useRef, useState } from "react";

import * as S from "./Invitation.style";
import Line from "../../../components/ui/Line";
import MainTitle from "../../../components/ui/MainTitle";
import ScrollConfetti from "../../../components/ui/ScrollConfetti";

const Invitation = () => {
  const [confettiCount, setConfettiCount] = useState(0);
  const confettiPointRef = useRef<HTMLDivElement>(null);
  const hasFiredRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasFiredRef.current && confettiPointRef.current) {
        const rect = confettiPointRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          hasFiredRef.current = true;
          setConfettiCount((c) => c + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Wrap>
      <div className="main">
        <MainTitle en="INVITATION" ko="소중한 분들을 초대합니다." />
        <br />
        <p>
          MBTI도, 식성도, 잠드는 시간도
          <br />
          참 많이 다른 저희지만,
          <br />
          함께할 때 가장 편안하고
          <br />
          평범한 하루도 즐거워집니다.
          <div ref={confettiPointRef} />
          <br />
          매일의 작은 웃음을 나누고,
          <br />
          같은 방향을 바라보며
          <br />
          다정하고 단단한 삶을
          <br />
          함께 만들어가겠습니다.
          <br />
          <br />
          서로에게 가장 든든한 편이 되기로
          <br />
          약속하는 날,
          <br />
          귀한 걸음 하시어 저희의 첫걸음을
          <br />
          축복해 주시면 감사하겠습니다.
        </p>

        <ScrollConfetti trigger={confettiCount} />
      </div>
      {/* <div className="line" /> */}
      <Line />
      <div className="family">
        {/* <p className="left"></p> */}
        <p className="left">
          김종열 · 이영순 <span className="font_color">의 장남</span>
          &nbsp;&nbsp;
          <span className="name">태 형</span>
        </p>
        <p>
          김홍덕 · 김미도 <span className="font_color">의 장녀</span>
          &nbsp;&nbsp;
          <span className="name">원 영</span>
        </p>
      </div>
    </S.Wrap>
  );
};

export default Invitation;
