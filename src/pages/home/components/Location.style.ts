import styled from "styled-components";

export const Wrap = styled.div`
  text-align: center;
  padding: 60px 40px;

  .title {
    font-size: 14px;
  }
  .subtitle {
    font-size: 12px;
  }
  .map {
    width: 100%;
    height: 300px;
    background-color: coral;
    margin: 20px 0;
  }
  .button_wrap {
    display: flex;
    justify-content: space-between;
  }

  .info {
    text-align: left;
    margin-top: 20px;
    font-size: 12px;

    li {
      .title {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        padding: 10px 0;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      button {
        background-color: ${({ theme }) => theme.color.background};
        width: 25px;
        height: 25px;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
