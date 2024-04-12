import { applyBoldStyle } from "../../utils/StringUtils";
import styles from "./Sponsor.module.scss";
import ic_swmaestro from "../../resources/ic_swmaestro.png";
import ic_fkii from "../../resources/ic_fkii.png";

export default function Sponsor() {
    return (
        <div className={styles.block}>
            <div className={styles.block__title}>
                {applyBoldStyle("**SW Maestro**와 **한국정보산업연합회**가")}
                <br />
                스킬코치와 함께합니다.
            </div>

            <div className={styles.block__img_container}>
                <img src={ic_swmaestro} height="30"/>
                <img src={ic_fkii} height="30"/>
            </div>
        </div>
    )
} 