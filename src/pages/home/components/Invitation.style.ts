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

  .font_main {
    &.en {
      font-size: 12px;
    }
    &.ko {
      font-size: 16px;
    }
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
    }
  }
`;
