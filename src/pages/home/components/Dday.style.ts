import styled from "styled-components";

export const Wrap = styled.div`
  padding: 10px 40px;
`;

export const CountDown = styled.ul`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 12px 17px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.main};
    width: 20%;

    p {
      &:first-child {
        font-size: 18px;
      }
      &:last-child {
        font-size: 12px;
      }
    }
  }
`;

export const LeftCount = styled.div`
  text-align: center;
  font-size: 13px;
`;
