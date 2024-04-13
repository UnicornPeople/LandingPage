import ic_naver from "../../resources/ic_naver.png";
import ic_kakao from "../../resources/ic_kakao.png";
import ic_line from "../../resources/ic_line.png";
import ic_coupang from "../../resources/ic_coupang.png";
import ic_baemin from "../../resources/ic_baemin.png";
import ic_carrot from "../../resources/ic_carrot.png";
import ic_toss from "../../resources/ic_toss.png";
import { isMobile, mobileMediaQuery } from "../../utils/CommonUtils";
import { applyBoldStyle } from "../../utils/StringUtils";
import { Spacer } from "../../components/Spacer";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    padding: 10px;
    color: #ffffff;
    font-size: 48px;
    white-space: pre-line;
    text-align: center;

    ${mobileMediaQuery(css`
      font-size: 30px;
    `)}
  }

  .subtitle {
    padding: 10px;
    color: #ffffff;
    font-size: 20px;
    white-space: pre-line;
    text-align: center;

    ${mobileMediaQuery(css`
      font-size: 18px;
    `)}
  }

  .companySection {
    display: flex;
    flex-direction: row;
    gap: 29px;

    ${mobileMediaQuery(css`
      justify-content: center;
    `)}
  }

  .coachBtn {
    padding-top: 13.5px;
    padding-bottom: 13.5px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 17px;
    color: #ffffff;
    border: 1px solid;
    border-color: #ffffff;
    border-radius: 6px;
    cursor: pointer;
  }
`;

function CompanyList() {
  const title = "**IT 회사**의\n개발, 디자인 직무\n면접 대비";
  const subtitle = "다양한 회사 및 직무가\n더 많이 추가될 예정이예요.";
  const coach_btn = "코치 리스트 보기";
  const onNavigateCoachListClick = () => {
    const targetElement = document.getElementById("coachList");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "auto",
      });
    }
  };

  return (
    <Container>
      <div className="title">{applyBoldStyle(title)}</div>
      <div className="subtitle">{subtitle}</div>
      <Spacer height="52px" />
      {isMobile() ? (
        <div>
          <div className="companySection">
            <img src={ic_naver} alt="icon" />
            <img src={ic_kakao} alt="icon" />
            <img src={ic_line} alt="icon" />
          </div>
          <Spacer height="28px" />
          <div className="companySection">
            <img src={ic_coupang} alt="icon" />
            <img src={ic_baemin} alt="icon" />
            <img src={ic_carrot} alt="icon" />
          </div>
          <Spacer height="28px" />
          <div className="companySection">
            <img src={ic_toss} alt="icon" />
          </div>
        </div>
      ) : (
        <div className="companySection">
          <img src={ic_naver} alt="icon" />
          <img src={ic_kakao} alt="icon" />
          <img src={ic_line} alt="icon" />
          <img src={ic_coupang} alt="icon" />
          <img src={ic_baemin} alt="icon" />
          <img src={ic_carrot} alt="icon" />
          <img src={ic_toss} alt="icon" />
        </div>
      )}

      <Spacer height="52px" />

      <div className="coachBtn" onClick={onNavigateCoachListClick}>
        {coach_btn}
      </div>
    </Container>
  );
}

export default CompanyList;
