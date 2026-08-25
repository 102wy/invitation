import * as S from "./Location.style";
import MainTitle from "../../../components/ui/MainTitle";
import YLine from "../../../components/ui/YLine";
import { BusIcon, ParkingIcon, SubwayIcon } from "../../../components/ui/Icon";

const Location = () => {
  return (
    <S.Wrap>
      <MainTitle en="LOCATION" ko="오시는 길" />
      <YLine />
      <p className="title">퀸벨호텔 1F 브리에가든</p>
      <p className="subtitle">대구 동구 동촌로 200</p>

      {/* 지도영역 */}
      <div className="map">여기에 지도를 넣을겁니다</div>
      {/* <ul className="button_wrap">
        <li>네이버지도</li>
        <li>티맵</li>
        <li>카카오네비</li>
      </ul> */}

      {/* 설명역역 */}
      <ul className="info">
        <li>
          <div className="title">
            <button>
              <ParkingIcon />
            </button>
            <p>주차안내</p>
          </div>
          <div className="content">
            <p>호텔 내 주차장</p>
            <p>제2 주차장 : 방촌동 822-2, 서적 유통단지 (셔틀버스 운행)</p>
          </div>
        </li>
        <li>
          <div className="title">
            <button>
              <BusIcon />
            </button>
            <p>버스</p>
          </div>
          <div className="content">
            <p>
              [퀸벨호텔 정류장 앞]
              <br />
              618, 719, 805, 818, 836, 동구1, 동구3
            </p>
            <p>
              [퀸벨호텔 정류장 건너]
              <br />
              618, 719, 805, 818, 836, 동구1-1, 동구3
            </p>
          </div>
        </li>
        <li>
          <div className="title">
            <button>
              <SubwayIcon />
            </button>
            <p>지하철</p>
          </div>
          <div className="content">
            <p>지하철 1호선 해안역(퀸벨호텔) 하차 후 3번출구 (50m 전방)</p>
            <p>
              [대경선 이용시]
              <br />
              구미역 또는 경산역 {">"} 동대구역 1호선 환승 {">"}{" "}
              해안역(퀸벨호텔)
            </p>
          </div>
        </li>
      </ul>
    </S.Wrap>
  );
};

export default Location;
