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
