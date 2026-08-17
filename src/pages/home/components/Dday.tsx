import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import * as S from "./Dday.style";

dayjs.extend(duration);

const Dday = () => {
  const [now, setNow] = useState(dayjs());
  const targetDate = dayjs("2026-11-01T10:00:00");

  useEffect(() => {
    // 1초마다 현재 시간을 갱신하는 인터벌 설정
    const timer = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(timer);
  }, []);

  // 남은 시간 계산 (목표 시간이 지나면 0 처리)
  const diffTime = targetDate.diff(now);
  const diff = dayjs.duration(diffTime > 0 ? diffTime : 0);

  const days = Math.floor(diff.asDays());
  const hours = diff.hours();
  const minutes = diff.minutes();
  const seconds = diff.seconds();

  return (
    <S.Wrap>
      <S.LeftCount>태형 🤍 원영 결혼식 까지</S.LeftCount>
      <S.CountDown>
        <li>
          <p>{days}</p>
          <p>일</p>
        </li>
        <p>:</p>
        <li>
          <p>{hours}</p>
          <p>시간</p>
        </li>
        <p>:</p>

        <li>
          <p>{minutes}</p>
          <p>분</p>
        </li>
        <p>:</p>
        <li>
          <p>{seconds}</p>
          <p>초</p>
        </li>
      </S.CountDown>
    </S.Wrap>
  );
};

export default Dday;
