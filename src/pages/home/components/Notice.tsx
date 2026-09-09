import MainTitle from "../../../components/ui/MainTitle";
import * as S from "./Notice.style";

import FRAME1 from "@/assets/images/frame_1.jpg";
import FRAME2 from "@/assets/images/frame_2.jpg";

const Notice = () => {
  return (
    <S.Wrap>
      <MainTitle en="INFORMATION" ko="안내사항" />
      <p className="title">포토부스</p>

      <div className="img_wrap">
        <div className="content">
          <img src={FRAME1} alt="" />
          <div className="desc_wrap">
            <p>
              <span>신랑측 프레임 선택시</span>
            </p>
            <p>신랑·신부 프레임</p>
          </div>
        </div>
        <div className="content">
          <img src={FRAME2} alt="" />
          <div className="desc_wrap">
            <p>
              <span>신부측 프레임 선택시</span>
            </p>
            <p>후추·먼지 프레임</p>
          </div>
        </div>
      </div>
      <p className="desc">
        로비에 포토부스가 마련되어 있습니다.
        <br />두 가지 프레임이 준비되어 있으니
        <br />
        횟수 제한 없이 마음껏 이용해 보시고
        <br />
        소중한 추억을 남겨 주세요
        <span className="heart">♥</span>
      </p>
    </S.Wrap>
  );
};

export default Notice;
