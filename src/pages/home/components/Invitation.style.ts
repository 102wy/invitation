import styled from "styled-components";

export const Wrap = styled.div`
  padding: 60px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.8;

  .line {
    width: 50px;
    height: 1px;
    background-color: #e0e0e0;
    margin: 30px auto;
  }

  .font_color {
    color: ${({ theme }) => theme.color.mutedForeground};
  }
  .ko {
    font-size: 16px;
    color: ${({ theme }) => theme.color.secondary};
    line-height: 1.8;
  }

  .family {
    letter-spacing: 1.4px;
    .left {
      &::before {
        content: "故";
        margin-left: -14px;
      }
    }
    .name {
      font-size: 16px;
      letter-spacing: 0.3px;
    }
  }
`;
