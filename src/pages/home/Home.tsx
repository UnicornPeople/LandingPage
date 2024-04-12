import PriceSection from "./PriceSection";
import CompanyList from "./CompanyList";
import Header from "./Header";
import Info from "./Info";
import Process from "./Process";
import ReviewSection from "./ReviewSection";
import ApplySection from "./apply/ApplySection";
import { styled } from "styled-components";
import { Spacer } from "../../components/Spacer";
import CoachList from "./CoachList";
import BizInfo from "./BizInfo";
import Sponsor from "./Sponsor";
import { useLocation } from "react-router-dom";
import saveKakaoAccessToken from "./usecase/SaveKakaoAccessToken";
import getKakaoAccessToken from "./usecase/GetKakakoAccessToken";
import { KAKAO_ACCESS_TOKEN_KEY } from "../../Const";

const Container = styled.div`
  background-color: #181818;
`;

function Home() {
  const location = useLocation();

  if (location.pathname === "/login/success") {
    const searchParams = new URLSearchParams(location.search);
    const accessToken = searchParams.get(KAKAO_ACCESS_TOKEN_KEY);

    saveKakaoAccessToken(accessToken);
  }

  console.log(getKakaoAccessToken());

  return (
    <Container>
      <Header />
      <Spacer height="120px" />
      <Info />
      <ApplySection />
      <Process />
      <CompanyList />
      <Spacer height="100px" />
      <CoachList />
      <ReviewSection />
      <Sponsor />
      <Spacer height="100px" />
      <PriceSection />
      <BizInfo />
    </Container>
  );
}

export default Home;
