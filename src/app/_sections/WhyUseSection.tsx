import { styled } from "styled-components";
import { Spacer } from "../_components/Spacer";
import { applyHighlightStyle } from "../_utils/StringUtils";
import Image from "next/image";
import quatation_1 from "../../../public/quatation_1.svg";
import quatation_2 from "../../../public/quatation_2.svg";

const Container = styled.div`
  padding-left: 205px;
  padding-right: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  .wrapper {
    width: 100%;
    max-width: 1030px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      letter-spacing: -1.128px;
      align-self: center;
    }

    .message1 {
      color: #333;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 33.6px */
      letter-spacing: 0.2px;

      margin-right: auto;
      align-self: flex-start;
      padding-left: 32px;
      padding-right: 32px;
      padding-top: 28px;
      padding-bottom: 28px;
      border-radius: 12px;
      background: #f7f7f8;
    }

    .message2_container {
      margin-left: auto;
      color: #f9f9f9;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.2px;

      padding-left: 32px;
      padding-right: 32px;
      padding-top: 28px;
      padding-bottom: 28px;
      border-radius: 12px;
      background: linear-gradient(
        259deg,
        rgba(0, 94, 235, 0.8) -33.69%,
        rgba(30, 0, 149, 0.8) 114.97%
      );
      white-space: pre-line;

      .message2_2 {
        font-weight: bold;
      }
    }
  }

  .small_divider {
    width: 60px;
    height: 6px;
    background: #f0f0f0;
  }
`;

const Message3Container = styled.div`
  display: flex;
  position: relative;
  padding-top: 24px;
  padding-bottom : 18px;

  .message3 {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -1.128px;
    white-space: pre-line;
    text-align: center;
  }

  .quatation_1 {
    align-self: flex-start; 
    margin-right: -24px; 
    margin-top: -24px; 
  }

  .quatation_2 {
    align-self: flex-end; 
    margin-left: 18px;
    margin-bottom: -18px;
  }
`;

function WhyUseSection() {
  const title = "서류는 자신있는데 면접이 어려우신가요?";
  const message1 =
    "기술 공부랑 연습도 많이 하지만 막상 면접장에 가면 머릿속이 하얘져요";
  const message2_1 =
    "당연합니다. 처음보는 현업자들에게서 질문이 쏟아지면 예기치못한\n압박감을 받기에 평소처럼 전달하는건 쉽지 않습니다.";
  const message2_2 = "그래서 실전처럼 연습할 수 있는 모의면접이 중요합니다.";
  const message3 =
    "그래서 면접을 잘볼 수 있는\n가장 좋은 방법은\n**실제처럼 연습하는게** 답입니다.";
  return (
    <Container>
      <div className="wrapper">
        <div className="title">{title}</div>
        <Spacer height="60px" />
        <div className="message1">{message1}</div>
        <Spacer height="8px" />
        <div className="message2_container">
          <div> {message2_1}</div>
          <Spacer height="16px" />
          <div className="message2_2"> {message2_2}</div>
        </div>
      </div>
      <Spacer height="100px" />
      <Message3Container>
        <Image className="quatation_1" src={quatation_1} alt="quatation_1" />
        <div className="message3">{applyHighlightStyle(message3)}</div>
        <Image className="quatation_2" src={quatation_2} alt="quatation_2" />
      </Message3Container>
      <Spacer height="80px" />
      <div className="small_divider" />
      <Spacer height="80px" />
    </Container>
  );
}

export default WhyUseSection;
