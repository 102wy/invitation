import React, { useState } from "react";
import dayjs from "dayjs";
import * as S from "./Calendar.style";
import Line from "../../../components/ui/Line";
import FloatingHearts from "../../../components/ui/FloatingHearts";

const Calendar = () => {
  // 2026년 11월 1일 기준 설정
  const [currentDate, setCurrentDate] = useState(dayjs("2026-11-01"));

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  const startDayOfWeek = startOfMonth.day(); // 11월 1일의 요일 (0: 일요일, ~ 6: 토요일)
  const daysInMonth = currentDate.daysInMonth(); // 11월의 총 일수 (30일)

  // 달력 그리드 배열 생성
  const calendarDays = [];

  // 2. 현재 달 날짜 채우기
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      date: startOfMonth.date(day),
      isCurrentMonth: true,
    });
  }

  // 3. 다음 달 빈 칸 채우기 (총 35일 또는 42일 맞추기)
  const remainingDays = (7 - (calendarDays.length % 7)) % 7;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      date: endOfMonth.add(i, "day"),
      isCurrentMonth: false,
    });
  }

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <S.Wrap>
      <p className="title">WEDDING DAY</p>
      <p className="title_date">2026년 11월 1일 일요일 오전 11시</p>
      {/* <MainTitle en="WEDDING DAY" ko="2026년 11월 1일 일요일 오전 11시" /> */}
      <div className="line" />
      <Line />
      {/* 달력 */}
      <div className="calendar_content">
        <div
          style={{
            maxWidth: "400px",
            margin: "20px auto",
          }}
        >
          {/* 달력 헤더 */}
          <div className="header">{currentDate.format("YYYY년 MM월")}</div>
          {/* 요일 헤더 */}
          <div className="day_of_week">
            {daysOfWeek.map((day, idx) => (
              <div
                key={day}
                className={`${idx === 0 ? "font_red" : idx === 6 ? "font_blue" : ""}`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* 날짜 그리드 */}
          <div className="days">
            {calendarDays.map(({ date, isCurrentMonth }, idx) => {
              const dayOfWeek = date.day();

              return (
                <div
                  key={idx}
                  className={`${idx === 0 ? "heart" : ""}`}
                  style={{
                    padding: "10px 0",
                  }}
                >
                  <p
                    className={`date ${!isCurrentMonth ? "next_month" : dayOfWeek === 0 ? "font_red" : dayOfWeek === 6 ? "font_blue" : ""} ${idx === 0 ? "font_white" : ""}`}
                  >
                    {date.date()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </S.Wrap>
  );
};

export default Calendar;
