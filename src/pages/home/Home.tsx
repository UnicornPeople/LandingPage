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

const Container = styled.div`
  background-color: #181818;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Spacer height="120px" />
      <Info />
      <ApplySection />
      <Process />
      <CompanyList />
      <Spacer height="100px" />
      <CoachList/>
      <ReviewSection />
      <Sponsor />
      <Spacer height="100px" />
      <PriceSection />
      <BizInfo />
    </Container>
  );
}

export default Home;
