import { mobileMediaQuery } from "../_utils/CommonUtils";
import { useState } from "react";
import { css, styled } from "styled-components";
import Image from "next/image";
import top_menu_logo from "../../../public/top_menu_logo.svg";

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 96px;
  padding-top: 24px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 24px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  ${mobileMediaQuery(css`
    height: 107px;
    margin: 0;
    padding: 0 auto;
  `)}

  .logo {
    margin: 10px;
  }
`;

const MenuContainer = styled.div`
  display: flex;

  ul {
    list-style-type: none;
  }

  ul li {
    float: left;
    margin-right: 24px;
  }

  li {
    padding: 12px;
  }

  .menu_1 {
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    cursor: pointer;
  }

  .menu_2 {
    border-radius: 6px;
    background: #4872e5;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    cursor: pointer;
  }
`;

const MenuList = () => {
  const onApplyGuideClick = () => {
    // window.open(APPLY_GUIDE_LINK, "_blank");
  };

  const onInterviewerGuideClick = () => {
    // window.open(INTERVIEWER_GUIDE_LINK, "_blank");
  };

  const onQALinkClick = () => {};

  return (
    <>
      <li className="menu_1" onClick={onApplyGuideClick}>
        지원자 가이드
      </li>
      <li className="menu_1" onClick={onInterviewerGuideClick}>
        커뮤니티 가이드
      </li>
      <li className="menu_1" onClick={onQALinkClick}>
        로그인
      </li>
      <li className="menu_2">상담 신청</li>
    </>
  );
};

function TopMenuSection() {
  const [menu, setMenu] = useState(false);

  return (
    <Container>
      <Image className="logo" src={top_menu_logo} alt="logo" />
      <MenuContainer>
        <nav>
          <ul>
            <MenuList />
          </ul>
        </nav>
      </MenuContainer>
    </Container>
  );
}

export default TopMenuSection;
