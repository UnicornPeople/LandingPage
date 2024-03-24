import { styled } from "styled-components";
import isMobile from "../../utils/CommonUtils";
import { applyBoldStyle } from "../../utils/StringUtils";
import { getAnalytics, logEvent } from "firebase/analytics";
import backgroundImg from "../../resources/price_section_bg.png";
import { Spacer } from "../../components/Spacer";

const Main = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 0px;

    display: flex;
    justify-content: center;
  }
`;

const MainBlur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #0000009e;
  backdrop-filter: blur(5px);
`;

const BtnApply = styled.div`
  width: fit-content;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  font-size: 24px;
  background-color: #486ce5;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: fit-content;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    background-color: #486ce5;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const DivDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  div.title {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
  }

  div.subtitle {
    font-size: 24px;
    font-weight: bold;
    color: #c4c4c4;
  }

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    div.title {
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
    }

    div.subtitle {
      font-size: 14px;
      font-weight: bold;
      color: #c4c4c4;
    }
  }
`;

const DivPriceContainer = styled.div`
  font-size: 24px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  div.title {
    font-size: 20px;
    font-weight: bold;
    color: #000000;
  }

  div.subtitle {
    font-size: 16px;
    color: #000000;
  }

  div.price {
    display: flex;
    flex-direction: column;

    .origin {
      font-size: 20px;
      font-weight: bold;
      color: #857272;
      text-decoration: line-through;
    }

    .saled {
      font-size: 20px;
      font-weight: bold;
      color: #ff0202;
    }
  }
`;

function PriceSection() {
  const title = "현직자에게 모의면접을 받고싶다면?";
  const subtitle = "지금 바로 신청해보세요";

  const priceTitle = "현직자에게 직접 받는 모의면접 1시간";
  const priceSubtitle = "네이버, 카카오, 쿠팡, 배민, 당근 현직자 대기중";
  const originPrice = "150,000원";
  const saledPrice = "69,900원";
  const onApplyClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "home_bottom_apply_click", {});

    const targetElement = document.getElementById("applyForm");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "auto",
      });
    }
  };

  return (
    <Main>
      <MainBlur />
      {isMobile() ? (
        <DivDesktopContainer>
          <Spacer height="40px" />
          <div className="title">{title}</div>
          <Spacer height="20px" />
          <div className="subtitle">{subtitle}</div>
          <Spacer height="24px" />

          <DivPriceContainer>
            <div className="title">{priceTitle}</div>
            <Spacer height="8px" />
            <div className="subtitle">{priceSubtitle}</div>
            <Spacer height="16px" />
            <div className="price">
              <div className="origin">{originPrice}</div>
              <div className="saled">{saledPrice}</div>
            </div>
          </DivPriceContainer>
          <Spacer height="16px" />
          <BtnApply onClick={onApplyClick}>지금 신청하기</BtnApply>
          <Spacer height="40px" />
        </DivDesktopContainer>
      ) : (
        <DivDesktopContainer>
          <Spacer height="80px" />
          <div className="title">{title}</div>
          <Spacer height="40px" />
          <div className="subtitle">{subtitle}</div>
          <Spacer height="48px" />

          <DivPriceContainer>
            <div className="title">{priceTitle}</div>
            <Spacer height="8px" />
            <div className="subtitle">{priceSubtitle}</div>
            <Spacer height="16px" />
            <div className="price">
              <div className="origin">{originPrice}</div>
              <div className="saled">{saledPrice}</div>
            </div>
          </DivPriceContainer>

          <Spacer height="32px" />
          <BtnApply onClick={onApplyClick}>지금 신청하기</BtnApply>
          <Spacer height="80px" />
        </DivDesktopContainer>
      )}
    </Main>
  );
}

export default PriceSection;
