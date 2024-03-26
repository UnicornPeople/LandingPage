import styles from "./ReviewSection.module.scss";
import isMobile from "../../utils/CommonUtils";
import { Spacer } from "../../components/Spacer";

function ReviewSection() {
  const title = "모의 면접 후기";
  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>
      <Spacer height="48px"/>
      {isMobile() ? (
        <div className={styles.review_container}>
          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>백엔드 취준생</div>
                <div>이*범</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
              감사합니다! 정말 도움되는 면접이었습니다! 제가 이력서나 포트폴리오에 적었지만, 
              생각하지 않았던 부분에서 질문 주셔서 너무 좋았고, cs질문 같은 경우도 어느정도 
              깊게 들어와서 보완 할 점을 느꼈습니다. 그리고 마지막 피드백 때 , 보완 할 점을 알려주시고, 
              면접 전에 고려해야 할 것, 그리고 요즘 면접 동향에 대해 알려주셔서 참고가 많이 되었습니다! 
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>프론트엔드 취준생</div>
                <div>황*철</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
            너무 부드럽게 잘 물어봐주셔서 너무 좋았습니다. 태어나서 처음으로 기술면접을 했던
            거라서 대답을 하면서도 스스로 아쉬운 점이 많이 묻어났는데, 어떤건 어느 수준으로
            마무리하고 어떤건 더 보완하면 좋을지, 제가 어떤 부분을 강점으로 가져갈 수 
            있을지 피드백 시간에 조언해주시는 부분도 좋았습니다.
            부드럽게 잘 리드해주셔서 제가 포인트를 잡지 못한 부분도 떠올려서 뽑아낼 수 있었던 점이 매우 좋았습니다.
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.review_container}>
          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>백엔드 취준생</div>
                <div>이*범</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
              감사합니다! 정말 도움되는 면접이었습니다! 제가 이력서나 포트폴리오에 적었지만, 
              생각하지 않았던 부분에서 질문 주셔서 너무 좋았고, cs질문 같은 경우도 어느정도 
              깊게 들어와서 보완 할 점을 느꼈습니다. 그리고 마지막 피드백 때 , 보완 할 점을 알려주시고, 
              면접 전에 고려해야 할 것, 그리고 요즘 면접 동향에 대해 알려주셔서 참고가 많이 되었습니다! 
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>프론트엔드 취준생</div>
                <div>황*철</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
            너무 부드럽게 잘 물어봐주셔서 너무 좋았습니다. 태어나서 처음으로 기술면접을 했던
            거라서 대답을 하면서도 스스로 아쉬운 점이 많이 묻어났는데, 어떤건 어느 수준으로
            마무리하고 어떤건 더 보완하면 좋을지, 제가 어떤 부분을 강점으로 가져갈 수 
            있을지 피드백 시간에 조언해주시는 부분도 좋았습니다.
            부드럽게 잘 리드해주셔서 제가 포인트를 잡지 못한 부분도 떠올려서 뽑아낼 수 있었던 점이 매우 좋았습니다.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;
