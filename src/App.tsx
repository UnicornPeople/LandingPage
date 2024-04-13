import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ogImg from "./resources/og.png";
import CompanyPage from "./pages/company/CompanyPage";
import CompanyDetailPage from "./pages/company/CompanyDetailPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    console.log(currentUrl);
    if (currentUrl.host.startsWith("unicornpeople.github.io")) {
      window.location.href = "https://www.skillcoach.co.kr";
    }
  });
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />

        <title>현직자에게 직접받는 모의면접, 스킬코치</title>
        <meta
          name="description"
          content="네카라쿠배 현직자에게 직접 모의면접과 피드백을 받아보세요!"
        />
        <meta
          name="keywords"
          content="네카라쿠배,개발자,면접,면접질문,모의면접,개발자 질문,프론트엔드,백엔드,디자인"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="현직자에게 직접받는 모의면접, 스킬코치"
        />
        <meta
          property="og:site_name"
          content="현직자에게 직접받는 모의면접, 스킬코치"
        />
        <meta
          property="og:description"
          content="네카라쿠배 현직자에게 직접 모의면접과 피드백을 받아보세요!"
        />
        <meta property="og:image" content={ogImg} />
        <meta property="og:url" content="https://skillcoach.co.kr" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/success" element={<Home />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/:key" element={<CompanyDetailPage />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
