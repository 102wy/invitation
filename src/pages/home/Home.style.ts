import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
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
  .top_wrapper {
    position: absolute;
    top: 5%;
    color: #fff;
    text-align: center;
    font-family: "Verandah";
    letter-spacing: 1.4px;
    width: 100%;
    font-size: 24px;
  }
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
