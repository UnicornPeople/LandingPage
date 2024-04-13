import { styled } from "styled-components";
import headerlogo from "../../resources/logo_dark.png";

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f0eff3;
`;

const BizInfoContainer = styled.div`
  width: calc(100% * 0.6);
  row-gap: 23px;
  column-gap: 20px;

  .bizLogo {
    width: 150px;
    margin-bottom: 10px;
    margin-left: -3px;
  }

  .bizText {
    line-height: 30px;
    font-weight: 400;
  }
`;

function BizInfo() {
  const title = "스킬코치 사업자정보";
  const subtitle =
    "대표자 : 정성민 | 사업자등록번호 813-61-00654 | 주소 : 서울시 광진구\
    능동로 276 한성빌딩 | 문의 : skill.coaching.app@gmail.com";
    
  return (
    <Container>
      <BizInfoContainer>
        <img src={headerlogo} alt="logo" className="bizLogo" />

        <div className="bizText">{title}</div>
        <div className="bizText">{subtitle}</div>
      </BizInfoContainer>
    </Container>
  );
}

export default BizInfo;
