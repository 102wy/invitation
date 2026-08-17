import React from "react";

import * as S from "./Location.style";
import Line from "../../../components/ui/Line";

const Location = () => {
  return (
    <S.Wrap>
      <p className="title">오시는 길</p>
      <Line />
      <p>대구 동구 동촌로 200</p>
      <p>퀸벨호텔 1F 브리에가든</p>

      {/* 지도영역 */}

      {/* 설명역역 */}
    </S.Wrap>
  );
};

export default Location;
