import React from "react";

import * as S from "./Invitation.style";
import Line from "../../../components/ui/Line";

const Invitation = () => {
  return (
    <S.Wrap>
      <div className="main">
        <p className="font_main en">INVITATION</p>
        <p className="font_main ko">소중한 분들을 초대합니다.</p>
        <br />
        MBTI도, 식성도, 잠드는 시간도
        <br />
        참 많이 다른 저희지만,
        <br />
        둘이 보내는 시간이 편안하고 즐겁기에
        <br />
        평생을 함께하고자 합니다.
        <br />
        <br />
        날마다 웃을 일을 만들고
        <br />
        같은 방향을 바라보며
        <br />
        다정하고 단단한 삶을 꾸려가겠습니다.
        <br />
        <br />
        서로에게 가장 든든한 편이 되기로
        <br />
        약속하는 날,
        <br />
        귀한 걸음 하시어 저희의 시작을
        <br />
        축복해 주시면 감사하겠습니다.
      </div>
      {/* <div className="line" /> */}
      <Line />
      <div className="family">
        {/* <p className="left"></p> */}
        <p className="left">
          김종열 · 이영순 <span className="font_gray">의 장남</span>{" "}
          <span className="name">태 형</span>
        </p>
        <p>
          김홍덕 · 김미도 <span className="font_gray">의 장녀</span>{" "}
          <span className="name">원 영</span>
        </p>
      </div>
    </S.Wrap>
  );
};

export default Invitation;
