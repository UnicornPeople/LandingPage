import styles from "./Process.module.scss";
import ic_email from "../../resources/ic_email.png";
import ic_calendar from "../../resources/ic_calendar.png";
import ic_feedback from "../../resources/ic_feedback.png";
import { Spacer } from "../../components/Spacer";

function Process() {
  const title = "진행 과정";
  const subtitle =
    "원하는 현직자에게 직접 신청하고\n모의 면접 및 피드백을 진행해요.";

  const card_1_title = "모의 면접 신청하기";
  const card_1_content =
    "면접 준비가 필요한 분야에 가장 맞는 현직자 코치에게 신청을 보내요.";
  const card_2_title = "일정 조율하기";
  const card_2_content = "면접 일정을 확정하고 면접을 준비해요.";
  const card_3_title = "면접 진행 및 피드백 받기";
  const card_3_content =
    "실무 모의 면접을 진행하고 강점을 드러낼 수 있는 피드백을 받아요.";
  return (
    <div className={styles.main}>
      <Spacer height="100px"/>
      <Spacer height="62px"/>
      <div className={styles.title}>{title}</div>
      <Spacer height="27px"/>
      <div className={styles.subtitle}>{subtitle}</div>
      <Spacer height="40px"/>

      <div className={styles.card_section}>
        <div className={styles.card}>
          <div className={styles.title_section}>
            <img className={styles.title_image} src={ic_email} alt="icon" />
            <div className={styles.title}>{card_1_title}</div>
          </div>

          <Spacer height="5px"/>
          <div className={styles.content}>{card_1_content}</div>
        </div>

        <Spacer height="25px"/>

        <div className={styles.card}>
          <div className={styles.title_section}>
            <img className={styles.title_image} src={ic_calendar} alt="icon" />
            <div className={styles.title}>{card_2_title}</div>
          </div>
          <Spacer height="5px"/>
          <div className={styles.content}>{card_2_content}</div>
        </div>

        <Spacer height="25px"/>

        <div className={styles.card}>
          <div className={styles.title_section}>
            <img className={styles.title_image} src={ic_feedback} alt="icon" />
            <div className={styles.title}>{card_3_title}</div>
          </div>
          <Spacer height="5px"/>
          <div className={styles.content}>{card_3_content}</div>
        </div>
      </div>

      <Spacer height="62px"/>
      <Spacer height="100px"/>
    </div>
  );
}

export default Process;
