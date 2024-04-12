import { KAKAO_ACCESS_TOKEN_KEY } from "../../../Const";

function getKakaoAccessToken(): string | null {
  return localStorage.getItem(KAKAO_ACCESS_TOKEN_KEY);
}

export default getKakaoAccessToken;