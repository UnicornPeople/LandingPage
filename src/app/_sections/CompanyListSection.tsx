import { styled } from "styled-components";
import { Spacer } from "../_components/Spacer";
import { applyHighlightStyle } from "../_utils/StringUtils";
import carrot_logo from "../../../public/company_list/carrot_logo.png";
import coupang_logo from "../../../public/company_list/coupang_logo.png";
import kakao_logo from "../../../public/company_list/kakao_logo.png";
import line_logo from "../../../public/company_list/line_logo.png";
import naver_logo from "../../../public/company_list/naver_logo.png";
import samsung_logo from "../../../public/company_list/samsung_logo.png";
import woowahan_logo from "../../../public/company_list/woowahan_logo.png";
import Image, { StaticImageData } from "next/image";

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7fbff;

  .title_1 {
    color: #333;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  .title_2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: 0.2px;
  }

  .title_3 {
    color: #202020;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 33.6px */
    letter-spacing: 0.2px;
    white-space: pre-line;
  }
`;

const RollingContainer = styled.div`
    display : flex;
    gap : 60px;
`;

function CompanyListSection() {
  const title1 = "스킬코치진 소속 기업 리스트";
  const title2 = "면접관의 마음은 **현직자가** 제일 잘 아니까.";
  const title3 =
    "면접도 결국은 같이 일할 동료를 찾는 과정 중 하나이기에 신중하게 검증하려 합니다.\n그래서 면접에서 하는 한마디 한마디가 중요합니다.";

  const images: StaticImageData[] = [
    carrot_logo,
    coupang_logo,
    kakao_logo,
    line_logo,
    naver_logo,
    samsung_logo,
    woowahan_logo,
  ];

  return (
    <Container>
      <RollingContainer>
        {images.map((image) => (
          <Image src={image} alt="company" />
        ))}
      </RollingContainer>
      <Spacer height="60px" />
      <RollingContainer>
        {images.map((image) => (
          <Image src={image} alt="company" />
        ))}
      </RollingContainer>
      <Spacer height="40px" />
      <div className="title_1">{title1}</div>
      <Spacer height="50px" />
      <div className="title_2">{applyHighlightStyle(title2)}</div>
      <Spacer height="16px" />
      <div className="title_3">{title3}</div>
    </Container>
  );
}

export default CompanyListSection;
