import React from "react";
import MainTitle from "../../../components/ui/MainTitle";
import * as S from "./Notice.style";
import Line from "../../../components/ui/Line";

const Notice = () => {
  return (
    <S.Wrap>
      <MainTitle en="INFORMATION" ko="안내사항" />
      <p className="title">포토부스</p>

      <div className="img_wrap">
        <div className="content">
          <img src="" alt="" />
          <p>신랑측 프레임</p>
        </div>
        <div className="content">
          <img src="" alt="" />
          <p>신부측 프레임</p>
        </div>
      </div>
      <p className="desc">
        로비에 포토부스가 준비되어 있습니다.
        <br />
        신랑 측, 신부 측 두 가지 프레임이 준비되어 있으니
        <br />두 프레임 모두 즐기시며 소중한 추억을 남겨주세요♥
      </p>
    </S.Wrap>
  );
};

export default Notice;
