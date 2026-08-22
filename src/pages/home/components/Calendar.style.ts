import styled from "styled-components";

export const Wrap = styled.div`
  text-align: center;
  padding: 60px 40px;
  /* padding-bottom: 0; */

  .title {
    letter-spacing: 1.3px;
    margin-bottom: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.main};
  }
  .title_date {
    font-size: 14px;
    letter-spacing: 0.7px;
  }
  .calendar_content {
    .header {
      text-align: center;
      margin: 16px 0;
      font-size: 20px;
      /* color: ${({ theme }) => theme.color.main}; */
    }
    /* 요일 */
    .day_of_week {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      font-weight: bold;
      margin-bottom: 8px;
    }
    /* 날짜 */
    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }
    .day {
      padding: 10px 0;
      border-radius: 4px;
    }
    .next_month {
      color: #ccc;
    }

    /* 당일날짜 */
    .heart {
      position: relative;
      .date {
        position: relative;
        color: #fff;
        z-index: 9 !important;
      }

      &::before {
        border-radius: 50px 50px 10px 10px;
        content: "";
        height: 43px;
        left: 50%;
        position: absolute;
        top: 7%;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
        width: 60%;
        background-color: #d08c95;
      }

      &::after {
        content: "";
        position: absolute;
        width: 60%;
        height: 43px;
        right: 50%;
        top: 7%;

        border-radius: 50px 50px 10px 10px;
        background-color: #d08c95;

        transform: rotate(45deg);
        transform-origin: 100% 100%;
      }
    }
  }
`;
