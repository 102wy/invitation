import styled from "styled-components";

export const Wrap = styled.div`
  padding: 60px 40px;
  font-size: 12px;

  .title {
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
  }

  .img_wrap {
    display: flex;
    gap: 2%;
    .desc_wrap {
      text-align: center;
      padding: 10px 0;

      span {
        background-color: #fff7cb;
        padding: 3px;
      }
    }

    img {
      width: 350px;
    }
  }
  .desc {
    margin-top: 40px;
    text-align: center;
  }

  .heart {
    color: ${({ theme }) => theme.color.red};
  }
`;
