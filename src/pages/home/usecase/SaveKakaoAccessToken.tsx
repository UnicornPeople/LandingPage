import { KAKAO_ACCESS_TOKEN_KEY } from "../../../Const";

function saveKakaoAccessToken(accessToken: string | null) {
  if (accessToken != null) {
    localStorage.setItem(KAKAO_ACCESS_TOKEN_KEY, accessToken);
  }
}

export default saveKakaoAccessToken;
