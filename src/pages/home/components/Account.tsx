import { useState } from "react";
import * as S from "./Account.style";
import MainTitle from "../../../components/ui/MainTitle";
import { CopyIcon, DownArrowIcon } from "../../../components/ui/Icon";
import Line from "../../../components/ui/Line";

const Account = () => {
  const [isShowValues, setIsShowValues] = useState({
    groom: false, //신랑측
    bride: false, //신부측
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error("복사 실패", error);
    }
  };

  return (
    <S.Wrap>
      <MainTitle en="ACCOUNT" ko="마음전하실곳" />
      <p className="desc">
        참석이 어려우신 분들을 위해 안내드립니다.
        <br />
        소중한 마음 감사히 간직하겠습니다.
      </p>
      <Line />
      <div
        className="content_wrapper"
        onClick={() =>
          setIsShowValues((prev) => ({ ...prev, groom: !prev.groom }))
        }
      >
        <div className="content_title">
          <p>신랑측 계좌번호</p>
          <S.Arrow className={isShowValues.groom ? "open" : ""}>
            <DownArrowIcon />
          </S.Arrow>
        </div>
        <ul
          onClick={(e) => e.stopPropagation()}
          className={`content ${isShowValues.groom ? "open" : ""}`}
        >
          <li>
            <div className="info">
              <p className="title">신랑 김태형</p>
              <p className="name">국민은행 91991123059</p>
            </div>
            <button onClick={() => handleCopy("91991123059")}>
              <CopyIcon />
              {copied ? "복사됨" : "복사"}
            </button>
          </li>
          <li>
            <div className="info">
              <p className="title">신랑 어머니 이영순</p>
              <p className="name">iM뱅크 185-08-114667</p>
            </div>
            <button onClick={() => handleCopy("185-08-114667")}>
              <CopyIcon />
              {copied ? "복사됨" : "복사"}
            </button>
          </li>
        </ul>
      </div>

      {/* 신부 */}
      <div
        className="content_wrapper"
        onClick={() =>
          setIsShowValues((prev) => ({ ...prev, bride: !prev.bride }))
        }
      >
        <div className="content_title">
          <p>신부측 계좌번호</p>
          <S.Arrow className={isShowValues.bride ? "open" : ""}>
            <DownArrowIcon />
          </S.Arrow>
        </div>
        <ul
          onClick={(e) => e.stopPropagation()}
          className={`content ${isShowValues.bride ? "open" : ""}`}
        >
          <li>
            <div className="info">
              <p className="title">신부 김원영</p>
              <p className="name">국민은행 599701-04-278607</p>
            </div>
            <button onClick={() => handleCopy("599701-04-278607")}>
              <CopyIcon />
              {copied ? "복사됨" : "복사"}
            </button>
          </li>
          <li>
            <div className="info">
              <p className="title">신부 아버지 김홍덕</p>
              <p className="name">국민은행 </p>
            </div>
            <button onClick={() => handleCopy("91991123059")}>
              <CopyIcon />
              {copied ? "복사됨" : "복사"}
            </button>
          </li>
          <li>
            <div className="info">
              <p className="title">신부 어머니 김미도</p>
              <p className="name">국민은행 </p>
            </div>
            <button onClick={() => handleCopy("91991123059")}>
              <CopyIcon />
              {copied ? "복사됨" : "복사"}
            </button>
          </li>
        </ul>
      </div>
    </S.Wrap>
  );
};

export default Account;
