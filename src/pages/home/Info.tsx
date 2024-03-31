import { applyBoldStyle } from "../../utils/StringUtils";
import { getAnalytics, logEvent } from "firebase/analytics";
import { styled } from "styled-components";
import backgroundImg from "../../resources/info_section_bg.webp";
import { Spacer } from "../../components/Spacer";
import isMobile from "../../utils/CommonUtils";

const Main = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: 200px;
  padding-bottom: 240px;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 120px;

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
  background-color: #2121219e;
  backdrop-filter: blur(5px);
`;

const DivContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  div.title {
    padding: 10px;
    font-size: 60px;
    color: #ffffff;
    white-space: pre-line;
    text-align: center;
  }

  div.subtitle {
    font-size: 32px;
    color: #ababab;
    white-space: pre-line;
    text-align: center;
  }

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    div.title {
      font-size: 30px;
    }

    div.subtitle {
      font-size: 16px;
    }
  }
`;

const BtnApply = styled.div`
  background-color: #486ce5;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 48px;
  padding-right: 48px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Info() {
  const title = "**현직자**가 봐주는 모의면접\n**스킬 코치**";
  const subtitle =
    "네카라쿠배 현직자와 함께\n실제 면접처럼 연습하고 피드백을 받을 수 있는 기회!";
  const onApplyClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "home_top_apply_click", {});

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
        <DivContentsContainer>
          <div className="title">{applyBoldStyle(title)}</div>

          <div className="subtitle">{subtitle}</div>

          <Spacer height="28px" />

          <BtnApply onClick={onApplyClick}>지금 신청하기</BtnApply>
        </DivContentsContainer>
      ) : (
        <DivContentsContainer>
          <div className="title">{applyBoldStyle(title)}</div>

          <div className="subtitle">{subtitle}</div>

          <Spacer height="56px" />

          <BtnApply onClick={onApplyClick}>지금 신청하기</BtnApply>
        </DivContentsContainer>
      )}
    </Main>
  );
}

export default Info;
