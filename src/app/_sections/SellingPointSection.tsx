import { styled } from "styled-components";
import { Spacer } from "../_components/Spacer";
import buffer_image from "../../../public/selling_point/buffer_image.svg";
import image_1 from "../../../public/selling_point/image_1.png";
import image_2 from "../../../public/selling_point/image_2.png";
import image_3 from "../../../public/selling_point/image_3.png";
import Image, { StaticImageData } from "next/image";
import { applyHighlightStyle } from "../_utils/StringUtils";

const Container = styled.header`
  padding-left: 205px;
  padding-right: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f8;

  .buffer {
    width: 78px;
    height: 100px;
  }

  .title {
    color: #000;
    text-align: center;
    /* Display 2/Bold */
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 52px */
    letter-spacing: -1.128px;
    white-space: pre-line;
  }
`;

const SellingPointContainer = styled.div`
  border-radius: 24px;
  background: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  padding-right: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 440px;
    height: 304px;
    object-fit: none;
    object-position: center;
  }

  .text_section {
    max-width: 560px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      color: #000;
      /* Title 2/Medium */
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 135.8%; /* 38.024px */
      letter-spacing: -0.661px;
    }

    .description {
      color: #303030;

      /* Headline 1/Regular */
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 144.5%; /* 26.01px */
      letter-spacing: -0.004px;
    }
  }
`;

class SellingPoint {
  title: string;
  description: string;
  image: StaticImageData;

  constructor(title: string, description: string, image: StaticImageData) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

function SellingPointSection() {
  const title = "스킬코치가 약속하는\n**3가지 차별점**";

  const sellingPointList = [
    new SellingPoint(
      "원하는 환경의 시뮬레이션",
      "희망하는 기업과 포지션을 선택하면 다양한 기술 스택을 가진 현직자들을 만나볼 수 있습니다. 내게 필요한 면접관과 모의 면접을 진행하여 해당 기업의 실제 면접과정을 미리 경험해보세요.",
      image_1
    ),
    new SellingPoint(
      "답변의 기술 개선",
      "체계적인 모의면접 프로세스와 면접 후 피드백 시간을 통해 면접 질문에 어떤 식으로 답변을 해야 높은 점수를 받는 지 A부터 Z까지 배우며 자신의 면접 스킬을 키워보세요. ",
      image_2
    ),
    new SellingPoint(
      "상세한 면접 리포트 제공",
      "면접이 끝난 뒤 제공되는 상세한 리포트를 통해 본인의 강점과 약점을 파악하고 이를 보강해보세요. 면접자에 대한 총평과 질문 리스트, 면접 시 팁 등 여러가지 정보들이 제공됩니다.",
      image_3
    ),
  ];
  return (
    <Container>
      <Spacer height="80px" />
      <Image className="buffer" src={buffer_image} alt="buffer" />
      <Spacer height="16px" />
      <div className="title">{applyHighlightStyle(title)}</div>
      <Spacer height="40px" />
      {sellingPointList.map((sellingPoint, index) => (
        <div key ={index}>
          <SellingPointContainer>
            <div className="image_wrapper">
              <Image src={sellingPoint.image} alt="image_1" />
            </div>
            <Spacer width="24px" />
            <div className="text_section">
              <div className="title">{sellingPoint.title}</div>
              <Spacer height="16px" />
              <div className="description">{sellingPoint.description}</div>
            </div>
          </SellingPointContainer>
          {index != sellingPointList.length && <Spacer height="20px" />}
        </div>
      ))}

      <Spacer height="80px" />
    </Container>
  );
}

export default SellingPointSection;
