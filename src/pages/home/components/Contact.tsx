import { useState } from "react";
import * as S from "./Contact.style";
import MainTitle from "../../../components/ui/MainTitle";
import { MessageIcon, PhonIcon } from "../../../components/ui/Icon";

const Contact = () => {
  const [isShowValues, setIsShowValues] = useState({
    groom: false, //신랑측
    bride: false, //신부측
  });

  return (
    <S.Wrap>
      <MainTitle en="CONTACT" ko="연락하기" />
      {/* 신랑 */}
      <a href="tel:+821031823893" aria-label="신랑에게 전화하기">
        테스트
      </a>
      <div
        className="content_wrapper"
        onClick={() => setIsShowValues((prev) => ({ ...prev, groom: !prev.groom }))}
      >
        <div className="content_title">
          <p>신랑측에게 연락하기</p>
          <S.Arrow className={isShowValues.groom ? "open" : ""}>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#333"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                  stroke="#333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </S.Arrow>
          <ul className={`content ${isShowValues.groom ? "open" : ""}`}>
            <li>
              <div className="info">
                <p className="title">신랑</p>
                <p className="name">김태형</p>
              </div>
              <div className="contact">
                <a
                  href="tel:+821031823893"
                  aria-label="신랑에게 전화하기"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <PhonIcon />
                </a>
                <a
                  href="sms:010-3182-3893"
                  aria-label="신랑에게 문자 보내기"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <MessageIcon />
                </a>
              </div>
            </li>
            <li>
              <div className="info">
                <p className="title">신랑 어머니</p>
                <p className="name">이영순</p>
              </div>
              <div className="contact">
                <a href="tel:01090403893" aria-label="신랑 어머니에게 전화하기">
                  <PhonIcon />
                </a>
                <a href="sms:01090403893" aria-label="신랑 어머니에게 문자 보내기">
                  <MessageIcon />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 신부 */}
      <div
        className="content_wrapper"
        onClick={() => setIsShowValues((prev) => ({ ...prev, bride: !prev.bride }))}
      >
        <div className="content_title">
          <p>신부측에게 연락하기</p>
          <S.Arrow className={isShowValues.bride ? "open" : ""}>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#333"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                  stroke="#333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </S.Arrow>
        </div>
        <ul
          onClick={(e) => e.stopPropagation()}
          className={`content ${isShowValues.bride ? "open" : ""}`}
        >
          <li>
            <div className="info">
              <p className="title">신부</p>
              <p className="name">김원영</p>
            </div>
            <div className="contact">
              <a href="tel:+82-10-5393-0218" aria-label="신부에게 전화하기">
                <PhonIcon />
              </a>
              <a
                href="sms:010-5393-0218"
                aria-label="신부에게 문자 보내기"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.href = "sms:010-5393-0218";
                }}
              >
                <MessageIcon />
              </a>
            </div>
          </li>
          <li>
            <div className="info">
              <p className="title">신부 아버지</p>
              <p className="name">김홍덕</p>
            </div>
            <div className="contact">
              <a href="tel:01095058952" aria-label="신부 아버지에게 전화하기">
                <PhonIcon />
              </a>
              <a href="sms:01095058952" aria-label="신부 아버지에게 문자 보내기">
                <MessageIcon />
              </a>
            </div>
          </li>
          <li>
            <div className="info">
              <p className="title">신랑 어머니</p>
              <p className="name">김미도</p>
            </div>
            <div className="contact">
              <a href="tel:01040894333" aria-label="신부 어머니에게 전화하기">
                <PhonIcon />
              </a>
              <a href="sms:01040894333" aria-label="신부 어머니에게 문자 보내기">
                <MessageIcon />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </S.Wrap>
  );
};

export default Contact;
