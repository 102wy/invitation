import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #ececec;
`;

export const Container = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.mobileWidth};

  min-height: 100vh;

  background: white;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
`;
