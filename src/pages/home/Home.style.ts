import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;

  .heart_wrapper {
    position: relative;
    overflow: hidden;
  }
`;

export const Section = styled.section`
  padding: 60px 0;
  text-align: center;
`;

export const Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Continuous";
  font-size: 35px;
  text-align: center;
  color: #fff;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  /* .top_wrapper {
    position: absolute;
    top: 5%;
    color: #fff;
    text-align: center;
    font-family: "Verandah";
    letter-spacing: 1.4px;
    width: 100%;
    font-size: 30px;
  } */

  .bottom_wrapper {
    position: absolute;
    bottom: 2%;
    color: #fff;
    font-family: "Gallery-regular";
    width: 100%;
  }

  .bottom_wrap {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    font-size: 14px;

    .date {
      color: #fff;
      border: 1px solid #fff;
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      font-size: 12px;
    }
  }
  .desc {
    font-size: 6px;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const HandWriting = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 30px;

  .wedding-text {
    /* width: min(40vw, 565px); */
    width: 80%;
    max-width: 450px;
  }

  .wedding-text svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .wedding-text .letter {
    fill: #fff;

    fill-opacity: 0;

    stroke: #fff;

    stroke-width: 2;

    stroke-linecap: round;

    stroke-linejoin: round;

    stroke-dasharray: 1;

    stroke-dashoffset: 1;

    animation: write-letter 0.6s ease-out forwards;
  }

  .wedding-text .letter-0 {
    animation-delay: 0s;
  }

  .wedding-text .letter-1 {
    animation-delay: 0.15s;
  }

  .wedding-text .letter-2 {
    animation-delay: 0.3s;
  }

  .wedding-text .letter-3 {
    animation-delay: 0.45s;
  }

  .wedding-text .letter-4 {
    animation-delay: 0.6s;
  }

  .wedding-text .letter-5 {
    animation-delay: 0.75s;
  }

  .wedding-text .letter-6 {
    animation-delay: 0.9s;
  }

  .wedding-text .letter-7 {
    animation-delay: 1.05s;
  }

  .wedding-text .letter-8 {
    animation-delay: 1.2s;
  }

  .wedding-text .letter-9 {
    animation-delay: 1.35s;
  }

  .wedding-text .letter-10 {
    animation-delay: 1.5s;
  }

  .wedding-text .letter-11 {
    animation-delay: 1.65s;
  }

  .wedding-text .letter-12 {
    animation-delay: 1.8s;
  }

  .wedding-text .letter-13 {
    animation-delay: 1.95s;
  }

  .wedding-text .letter-14 {
    animation-delay: 2.1s;
  }

  .wedding-text .letter-15 {
    animation-delay: 2.25s;
  }

  .wedding-text .letter-16 {
    animation-delay: 2.4s;
  }

  .wedding-text .letter-17 {
    animation-delay: 2.55s;
  }

  .wedding-text .letter-18 {
    animation-delay: 2.7s;
  }

  /* @keyframes write-letter {
    from {
      stroke-dashoffset: 1;
    }

    to {
      stroke-dashoffset: 0;
    }
  } */

  @keyframes write-letter {
    0% {
      fill-opacity: 0;

      stroke-dashoffset: 1;
    }

    90% {
      fill-opacity: 0;

      stroke-dashoffset: 0;
    }

    100% {
      fill-opacity: 1;

      stroke-dashoffset: 0;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const ConfettiRef = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 20%;
`;
