import styles from "./Header.module.scss";
import headerlogo from "../../resources/logo_dark.png";
import headerMenuImage from "../../resources/img_home_header_menu.png";
import isMobile from "../../utils/CommonUtils";
import { APPLY_GUIDE_LINK, INTERVIEWER_GUIDE_LINK } from "../../Const";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useState } from "react";

const MenuList = () => {
  const onApplyGuideClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "home_header_user_guide_click", {});

    window.open(APPLY_GUIDE_LINK, "_blank");
  };

  const onInterviewerGuideClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "home_header_interviewer_guide_click", {});

    window.open(INTERVIEWER_GUIDE_LINK, "_blank");
  };

  const onQALinkClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "home_header_kakaotalk_qa_click", {});

    window.ChannelIO('showMessenger');
  };

  return (
    <>
      <li onClick={onApplyGuideClick}>면접자 가이드</li>
      <li onClick={onInterviewerGuideClick}>면접관 가이드</li>
      <li onClick={onQALinkClick}>고객지원</li>
    </>
  );
};

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <img src={headerlogo} alt="logo" />
        </div>

        {isMobile() ? (
          <div>
            <img
              className={styles.menu_icon}
              src={headerMenuImage}
              alt="headerMenuImage"
              onClick={() => {
                setMenu(!menu);
              }}
            />
            {menu && (
              <ul className={styles.menu}>
                <MenuList />
              </ul>
            )}
          </div>
        ) : (
          <div>
            <nav className={styles.navigation}>
              <ul>
                <MenuList />
              </ul>
            </nav>

            {/* <div className={styles.login_box}>
              <div className={styles.login_text}>Login</div>
            </div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
