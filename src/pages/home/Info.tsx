import styles from "./Info.module.scss";
import image_group from "../../resources/img_home_group.webp";
import { applyBoldStyle } from "../../utils/StringUtils";
import { getAnalytics, logEvent } from "firebase/analytics";

function Info() {
  const title = "**현직자**와 함께\n실무 면접을,\n**스킬 코치**";
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
    <div className={styles.main}>
      <div className={styles.title}>{applyBoldStyle(title)}</div>

      <div className={styles.h17}></div>

      <div className={styles.subtitle}>{subtitle}</div>

      <div className={styles.h35}></div>

      <div className={styles.btn_apply} onClick={onApplyClick}>
        지금 신청하기
      </div>

      <div className={styles.h35}></div>

      <div>
        <img className={styles.group_img} src={image_group} alt="group_image" />
      </div>
    </div>
  );
}

export default Info;
