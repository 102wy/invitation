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
    p {
      text-align: center;
      padding: 10px 0;
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
