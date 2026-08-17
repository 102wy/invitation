import styled from "styled-components";

export const Wrap = styled.div`
  text-align: center;

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
