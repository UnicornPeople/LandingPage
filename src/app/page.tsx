"use client";
import styled from "styled-components";
import { Spacer } from "./_components/Spacer";
import BizInfoSection from "./_sections/BizInfoSection";
import TopMenuSection from "./_sections/TopMenuSection";
import IntroSection from "./_sections/IntroSection";
import CompanyListSection from "./_sections/CompanyListSection";
import SupportContentsSection from "./_sections/SupportContentsSection";
import WhyUseSection from "./_sections/WhyUseSection";
import SellingPointSection from "./_sections/SellingPointSection";

const Container = styled.div`
  background-color: #ffffff;
`;

export default function Home() {
  return (
    <Container>
      <TopMenuSection/>
      <Spacer height="96px" />
      <Spacer height="40px" />
      <IntroSection />
      <Spacer height="30px" />
      <CompanyListSection />
      <Spacer height="100px" />
      <SupportContentsSection />
      <Spacer height="160px" />
      <WhyUseSection />
      <SellingPointSection />
      <Spacer height="100px" />
      <BizInfoSection />
    </Container>
  );
}