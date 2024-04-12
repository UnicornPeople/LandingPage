import { useLocation } from "react-router-dom";
import { KAKAO_ACCESS_TOKEN_KEY } from "../../../Const";

function saveKakaoAccessToken() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get(KAKAO_ACCESS_TOKEN_KEY);

  if (accessToken != null) {
    localStorage.setItem(KAKAO_ACCESS_TOKEN_KEY, accessToken);
  }
}

export default saveKakaoAccessToken;
