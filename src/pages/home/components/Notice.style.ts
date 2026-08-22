import styled from "styled-components";

export const Wrap = styled.div`
  padding: 60px 40px;
  font-size: 12px;

  .title {
    font-size: 14px;
  }

  .img_wrap {
    display: flex;
    gap: 2%;
    .content {
      width: 49%;
      background-color: coral;
      height: 100px;
      position: relative;

      p {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .desc {
    margin-top: 20px;
    text-align: center;
  }
`;
