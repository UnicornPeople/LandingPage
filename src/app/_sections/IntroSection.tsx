import Image from "next/image";
import { css, styled } from "styled-components";
import IntroImage from "../../../public/intro_image.png";
import { Spacer } from "../_components/Spacer";
import IntroCooperativeCompany from "../../../public/intro_cooperative_company.png";

const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  .intro_image {
    width: 510px;
    height: 423px;
  }
`;

const IntroTextContainer = styled.div`
  .title {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 52px */
    letter-spacing: -1.128px;
    white-space: pre-line;
  }

  .subtitle {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 133.4%; /* 32.016px */
    letter-spacing: -0.552px;
    white-space: pre-line;
  }

  .cooperative {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.091px;
  }
`;

function IntroSection() {
  const title = "업계 최고의 현직자들과\n실전처럼 준비하는 면접";
  const subtitle =
    "스킬코치에서 현직자들과 실제 면접처럼 연습하고\n자세한 피드백을 통해 소중한 기회를 잡으세요.";
  const cooperative = "스킬코치 공식 협력사";
  //   const onApplyClick = () => {
  //     const analytics = getAnalytics();
  //     logEvent(analytics, "home_top_apply_click", {});

  //     const targetElement = document.getElementById("applyForm");
  //     if (targetElement) {
  //       targetElement.scrollIntoView({
  //         behavior: "auto",
  //       });
  //     }
  //   };

  return (
    <Container>
      <IntroTextContainer>
        <div className="title">{title}</div>
        <Spacer height="16px" />
        <div className="subtitle">{subtitle}</div>
        <Spacer height="64px" />
        <div className="cooperative">{cooperative}</div>
        <Spacer height="8px" />
        <Image src={IntroCooperativeCompany} alt="cooperative company"/>
      </IntroTextContainer>
      <Spacer width="100px"/>
      <Image className="intro_image" src={IntroImage} alt="intro" />
    </Container>
  );
}

export default IntroSection;
