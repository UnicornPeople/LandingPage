import { useParams } from "react-router-dom";
import styled from "styled-components";
import ic_naver from "../../resources/ic_naver.png";
import { Spacer } from "../../components/Spacer";
import { Divider } from "../../components/Divider";
import { SetStateAction, useState } from "react";

const Container = styled.div`
  width: 100%;
  height : 100vh;
  font-weight: 500;
  display : flex;
  flex-direction : column;
`;

const TopContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .contents {
    display: flex;
    flex-direction: column;
    width: 1060px;

    img {
      width: 80px;
      height: 80px;
      border: 1px solid #cacaca;
      border-radius: 20px;
    }

    div {
      color: #333333;
      font-size: 36px;
      font-weight: bold;
    }
  }
`;

const TapContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .contents {
    display: flex;
    flex-direction: row;
    width: 1060px;
    color: #4b4c50;
    font-size: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 32px;
  }
`;

const TapContentsContainer = styled.div`
  background-color: #ebecee;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow : 1;

  .contents {
    display: flex;
    flex-direction: row;
    width: 1060px;
    flex-grow : 1;
    background-color: #ffffff;
    color: #4b4c50;
    font-size: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 32px;
  }
`;

function CompanyDetailPage() {
  const [activeTab, setActiveTab] = useState("story");

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const { key } = useParams();
  console.log(key);

  return (
    <Container>
      <TopContainer>
        <Spacer height="56px" />
        <div className="contents">
          <img src={ic_naver} alt="icon" />
          <Spacer height="24px" />
          <div>{"네이버(주)"}</div>
          <Spacer height="24px" />
        </div>
      </TopContainer>
      <Divider height="1px" color="#f3f3f4" />
      <TapContainer>
        <div className="contents">
          <div>이야기</div>
          <div>현직자 Q&A</div>
          <div>연봉</div>
          <div>복지</div>
          <div>채용</div>
        </div>
      </TapContainer>
      <Divider height="1px" color="#f3f3f4" />
      <TapContentsContainer>
        {activeTab === "story" && (
          <>
            <Spacer height="24px" />
            <div className="contents">
            </div>
            <Spacer height="24px" />
          </>
        )}
        {activeTab === "qa" && <div>탭 2의 내용</div>}
        {activeTab === "salary" && <div>탭 3의 내용</div>}
        {activeTab === "welfare" && <div>탭 3의 내용</div>}
        {activeTab === "career" && <div>탭 3의 내용</div>}
      </TapContentsContainer>
    </Container>
  );
}

export default CompanyDetailPage;
