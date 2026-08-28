import styled from "styled-components";

export const Wrap = styled.div`
  text-align: center;
  padding: 0 10px 60px 10px;

  .more {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.main};
    font-size: 12px;
    margin-top: 20px;

    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      /* background-color: #f5f0e9; */
      color: #6f5739;
      border-color: #b39876;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;

    li {
      img {
        object-fit: cover;
        height: 200px;
      }
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;

  background: rgba(0, 0, 0, 0.85);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const ModalContent = styled.div`
  position: relative;

  max-width: 90vw;
  max-height: 90vh;

  img {
    display: block;

    max-width: 90vw;
    max-height: 90vh;

    object-fit: contain;

    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;

    touch-action: none;
  }

  .close {
    position: absolute;
    top: -45px;
    right: 0;

    border: 0;
    background: transparent;

    color: white;
    font-size: 36px;
    line-height: 1;

    cursor: pointer;
  }
`;

export const Arrow = styled.button`
  position: fixed;
  top: 50%;
  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 70px;

  transform: translateY(-50%);

  border: 0;
  /* background: rgba(0, 0, 0, 0.3); */

  color: white;
  font-size: 60px;
  font-weight: 200;
  line-height: 1;

  cursor: pointer;

  transition: background 0.2s;

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 55px;

    font-size: 45px;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

export const ImageCount = styled.span`
  position: absolute;
  bottom: -35px;
  left: 50%;

  transform: translateX(-50%);

  color: white;
  font-size: 14px;
`;
