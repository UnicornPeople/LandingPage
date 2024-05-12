import { styled } from "styled-components";
import biz_info_logo from "../../../public/biz_info_logo.svg";
import Image from "next/image";

const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left : 250px;
  padding-right : 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9f9f9f;
`;

const BizInfoContainer = styled.div`
  width: 100%;
  color: #ffffff;

  .biz_logo {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 124px;
  }

  .title {
    color: #ffffff;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.2px;
  }

  .subtitle {
    color: #e2e0e0;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.2px;
  }
`;

function BizInfoSection() {
  const title = "스킬코치 사업자정보";
  const subtitle =
    "대표자 : 정성민 | 사업자등록번호 813-61-00654 | 주소 : 서울시 광진구\
    능동로 276 한성빌딩 | 문의 : skill.coaching.app@gmail.com";

  return (
    <Container>
      <BizInfoContainer>
        <Image src={biz_info_logo} alt="logo" className="biz_logo" />
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </BizInfoContainer>
    </Container>
  );
}

export default BizInfoSection;
