import styled from "styled-components";

interface MainTitleProps {
  en?: string;
  ko?: string;
  mt?: string;
}
const MainTitle = ({ en, ko, mt }: MainTitleProps) => {
  return (
    <TitleWrap mt={mt}>
      {en && <p className="en">{en}</p>}
      {ko && <p className="ko">{ko}</p>}
    </TitleWrap>
  );
};

export default MainTitle;

const TitleWrap = styled.div<{ mt?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  .en {
    font-size: 12px;
    color: ${({ theme }) => theme.color.main};
  }
  .ko {
    font-size: 18px;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
