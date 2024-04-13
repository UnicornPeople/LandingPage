import { applyBoldStyle } from "../../utils/StringUtils";
import ic_swmaestro from "../../resources/ic_swmaestro.png";
import ic_fkii from "../../resources/ic_fkii.png";
import { css, styled } from "styled-components";
import { mobileMediaQuery } from "../../utils/CommonUtils";

const Container = styled.div`
  display: block;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  .block_title {
    font-size: 28px;
    text-align: center;
    color: white;
    line-height: 45px;

    ${mobileMediaQuery(css`
      font-size: 20px;
    `)}
  }

  .block_img_container {
    display: flex;
    flex-direction: row;
    gap: 80px;
    align-items: center;
    margin-top: 40px;
    justify-content: center;

    ${mobileMediaQuery(css`
      flex-direction: column;
    `)}
  }
`;

function Sponsor() {
  return (
    <Container>
      <div className="block_title">
        {applyBoldStyle("**SW Maestro**와 **한국정보산업연합회**가")}
        <br />
        스킬코치와 함께합니다.
      </div>

      <div className="block_img_container">
        <img src={ic_swmaestro} height="30" />
        <img src={ic_fkii} height="30" />
      </div>
    </Container>
  );
}

export default Sponsor;
