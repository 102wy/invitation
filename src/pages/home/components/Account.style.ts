import styled from "styled-components";

export const Wrap = styled.div`
  padding: 60px 40px;
  text-align: center;

  .desc {
    font-size: 12px;
  }
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
      padding: 10px 12px;
      background-color: ${({ theme }) => theme.color.background};
      /* 정보 */
      .info {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 6px;
        .title {
          color: ${({ theme }) => theme.color.mutedForeground};
          font-size: 12px;
        }
        .name {
          font-size: 14px;
        }
      }
      button {
        display: flex;
        align-items: center;
        font-size: 11px;
        gap: 3px;
        border: 1px solid ${({ theme }) => theme.color.border};
        padding: 6px 10px;
        cursor: pointer;
        color: ${({ theme }) => theme.color.secondary};
        transition: all ease-in 0.3s;
        &:hover {
          border: 1px solid ${({ theme }) => theme.color.borderHover};
          color: ${({ theme }) => theme.color.borderHover};
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
