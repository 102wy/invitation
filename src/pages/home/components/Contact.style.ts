import styled from "styled-components";

export const Wrap = styled.div`
  text-align: center;
  padding: 60px 40px;

  .content_wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.color.muted};
  }
  .content_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;
    padding: 20px 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    height: 0;
    overflow: hidden;
    padding: 0;
    opacity: 0;

    transition:
      grid-template-rows 0.3s ease,
      opacity 0.5s ease,
      padding 0.5s ease,
      height 0.5s ease;

    &.open {
      opacity: 1;
      height: auto;
      padding: 10px 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 0;
      /* 정보 */
      .info {
        display: flex;
        align-items: center;
        gap: 6px;
        .title {
          color: ${({ theme }) => theme.color.mutedForeground};
          font-size: 12px;
        }
        .name {
          font-size: 14px;
        }
      }
      /* 아이콘 */
      .contact {
        display: flex;
        align-items: center;
        gap: 10px;
        a {
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
  }
`;

export const Arrow = styled.div`
  transition: transform 0.3s ease;

  &.open {
    transform: rotate(180deg);
  }
`;
