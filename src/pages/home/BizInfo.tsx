import headerlogo from "../../resources/logo_dark.png";
import styles from "./BizInfo.module.scss";

function BizInfo() {
    return (

        <div className={styles.main}>
            <div className={styles.bizInfoContainer}>

                <img src={headerlogo} alt="logo" className={styles.bizLogo} />

                <div className={styles.bizText}>
                    스킬코치 사업자정보
                </div>
                <div className={styles.bizText}>
                대표자 : 정성민 | 사업자등록번호 813-61-00654 | 주소 : 서울시 광진구 능동로 276 한성빌딩 | 문의 : skill.coaching.app@gmail.com 
                </div>
            </div>
        </div>
    )
}

export default BizInfo;