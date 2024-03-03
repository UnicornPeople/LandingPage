import Footer from "./Footer";
import CompanyList from "./CompanyList";
import Header from "./Header";
import Info from "./Info";
import Process from "./Process";
import ReviewSection from "./ReviewSection";
import ApplySection from "./apply/ApplySection";
import { styled } from "styled-components";
import { Spacer } from "../../components/Spacer";
import CoachList from "./CoachList";

const Container = styled.div`
  background-color: #181818;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Spacer height="120px" />
      <Spacer height="35px" />
      <Info />
      <ApplySection />
      <Process />
      <CompanyList />
      <Spacer height="100px" />
      <CoachList/>
      <ReviewSection />
      <Spacer height="100px" />
      <Footer />
      <Spacer height="100px" />
    </Container>
  );
}

export default Home;
