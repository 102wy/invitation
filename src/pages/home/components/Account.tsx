import { useState } from "react";
import * as S from "./Account.style";
import MainTitle from "../../../components/ui/MainTitle";
import { CopyIcon, DownArrowIcon } from "../../../components/ui/Icon";
import Line from "../../../components/ui/Line";
import { useCopyClipboard } from "@/hooks/useCopyClipboard";

const Account = () => {
  const [isShowValues, setIsShowValues] = useState({
    groom: false, //신랑측
    bride: false, //신부측
  });

  const [copied, setCopied] = useState({
    groom1: false,
    groom2: false,
    bride1: false,
    bride2: false,
    bride3: false,
  });

  const { copiedKey, copyToClipboard } = useCopyClipboard(1000);

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied((prev) => ({
        ...prev,
        [key]: true,
      }));

      setTimeout(() => {
        setCopied((prev) => ({
          ...prev,
          [key]: false,
        }));
      }, 1000);
    } catch (error) {
      console.error("복사 실패", error);
    }
  };

  return (
    <S.Wrap>
      <MainTitle en="ACCOUNT" ko="마음 전하실 곳" />
      <p className="desc">
        참석이 어려우신 분들을 위해
        <br />
        마음 전하실 곳을 안내드립니다.
        <br />
        따뜻한 마음 감사히 간직하겠습니다.
      </p>
      <Line />

      {/* 신랑 측 */}
      <div
        className="content_wrapper"
        onClick={() => setIsShowValues((prev) => ({ ...prev, groom: !prev.groom }))}
      >
        <div className="content_title">
          <p>신랑 측 계좌번호</p>
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
            <button onClick={() => copyToClipboard("91991123059", "groom1")}>
              <CopyIcon />
              {copiedKey === "groom1" ? "복사됨" : "복사"}
            </button>
          </li>
          <li>
            <div className="info">
              <p className="title">신랑 어머니 이영순</p>
              <p className="name">iM뱅크(구 대구은행) 185-08-114667</p>
            </div>
            <button onClick={() => copyToClipboard("185-08-114667", "groom2")}>
              <CopyIcon />
              {copiedKey === "groom2" ? "복사됨" : "복사"}
            </button>
          </li>
        </ul>
      </div>

      {/* 신부 측 */}
      <div
        className="content_wrapper"
        onClick={() => setIsShowValues((prev) => ({ ...prev, bride: !prev.bride }))}
      >
        <div className="content_title">
          <p>신부 측 계좌번호</p>
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
            <button onClick={() => copyToClipboard("599701-04-278607", "bride1")}>
              <CopyIcon />
              {copiedKey === "bride1" ? "복사됨" : "복사"}
            </button>
          </li>
          <li>
            <div className="info">
              <p className="title">신부 아버지 김홍덕</p>
              <p className="name">농협은행 352-0336-0306-23</p>
            </div>
            <button onClick={() => copyToClipboard("352-0336-0306-23", "bride2")}>
              <CopyIcon />
              {copiedKey === "bride2" ? "복사됨" : "복사"}
            </button>
          </li>
          <li>
            <div className="info">
              <p className="title">신부 어머니 김미도</p>
              <p className="name">기업은행 162-076139-02-010</p>
            </div>
            <button onClick={() => copyToClipboard("162-076139-02-010", "bride3")}>
              <CopyIcon />
              {copiedKey === "bride3" ? "복사됨" : "복사"}
            </button>
          </li>
        </ul>
      </div>
    </S.Wrap>
  );
};

export default Account;
