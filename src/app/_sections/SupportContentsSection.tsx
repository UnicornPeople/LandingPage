import { styled } from "styled-components";
import BizInfoLogo from "../../../public/bizInfoLogo.svg";
import Image from "next/image";
import { Spacer } from "../_components/Spacer";

const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  .title {
    /* Display 2/Bold */
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 52px */
    letter-spacing: -1.128px;
    white-space: pre-line;
  }
`;

const ContentContainer = styled.div`
  border-radius: 16px;
  background: #f7f7f8;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-line;

  .number {
    border-radius: 30px;
    background: #005eeb;
    width: 26px;
    height: 26px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.2px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: #202020;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
    letter-spacing: 0.2px;
    text-align : center;
  }

  .subtitle {
    color: #292929;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: 0.2px;
  }
`;

const ContentsContainer = styled.div`
  display : flex;
  gap : 24px;  
`;

class Content {
  title: string;
  subtitle: string;

  constructor(title: string, subtitle: string) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

function SupportContentsSection() {
  const title = "합격에 가까워질 수 있도록\n스킬코치가 도와드릴게요";
  const contentList = [
    new Content(
      "확실하게 인증된 현직자",
      "철저한 검증을 거쳐 업계 최고 기업의\n현직자분들로만 구성한 코치진"
    ),
    new Content(
      "상세한 리포트 제공",
      "실제처럼 면접 진행 후, 전문적인 피드백을\n다운로드 가능한 리포트 형태로 제공"
    ),
    new Content(
      "합리적인 가격",
      "타 서비스 대비 더 저렴하지만 더욱\n알차고 전문적인 프로그램"
    ),
  ];

  return (
    <Container>
      <div className="title">{title}</div>
      <Spacer height="40px" />
      <ContentsContainer>
        {contentList.map((contents, index) => (
          <ContentContainer>
            <div className="number">
              <span>{index + 1}</span>
            </div>
            <Spacer height="24px" />
            <div className="title">{contents.title}</div>
            <Spacer height="12px" />
            <div className="subtitle">{contents.subtitle} </div>
          </ContentContainer>
        ))}
      </ContentsContainer>
    </Container>
  );
}

export default SupportContentsSection;
