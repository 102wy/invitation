import * as S from "./Location.style";
import MainTitle from "../../../components/ui/MainTitle";
import YLine from "../../../components/ui/YLine";
import { BusIcon, ParkingIcon, SubwayIcon } from "../../../components/ui/Icon";
import { useEffect, useRef } from "react";

import LOCATION_ICON from "@/assets/images/heart-marker.png";

const Location = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const kakao = window.kakao;
    const container = document.getElementById("map");

    if (!container) return;

    const position = new kakao.maps.LatLng(35.8823602975974, 128.662019053984);

    const map = new kakao.maps.Map(container, {
      center: position,
      level: 3,
    });

    mapRef.current = map;

    const markerImage = new kakao.maps.MarkerImage(LOCATION_ICON, new kakao.maps.Size(50, 50), {
      offset: new kakao.maps.Point(25, 50),
    });

    const marker = new kakao.maps.Marker({
      position,
      image: markerImage,
    });

    marker.setMap(map);

    // ⭐ 마커가 DOM에 그려질 때까지 기다림
    setTimeout(() => {
      const markerElements = container.querySelectorAll('img[src*="heart-marker"]');

      markerElements.forEach((element) => {
        const img = element as HTMLImageElement;

        img.style.animation = "locationBounce 1.2s ease-in-out infinite";
        img.style.transformOrigin = "bottom center";
      });
    }, 100);
    return () => {
      mapRef.current = null;
    };
  }, []);

  // 확대

  const zoomIn = () => {
    if (!mapRef.current) return;

    mapRef.current.setLevel(mapRef.current.getLevel() - 1);
  };

  // 축소

  const zoomOut = () => {
    if (!mapRef.current) return;

    mapRef.current.setLevel(mapRef.current.getLevel() + 1);
  };

  return (
    <S.Wrap>
      <MainTitle en="LOCATION" ko="오시는 길" />
      <YLine />
      <p className="title">퀸벨호텔 1F 브리에가든</p>
      <p className="subtitle">대구 동구 동촌로 200</p>

      <div className="map_wrap">
        {/* 지도영역 */}
        <div id="map" className="map"></div>
        <div className="custom_zoomcontrol radius_border">
          <span onClick={zoomIn}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
              alt="확대"
            />
          </span>

          <span onClick={zoomOut}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
              alt="축소"
            />
          </span>
        </div>
      </div>

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
              구미역 또는 경산역 {">"} 동대구역 1호선 환승 {">"} 해안역(퀸벨호텔)
            </p>
          </div>
        </li>
      </ul>
    </S.Wrap>
  );
};

export default Location;
