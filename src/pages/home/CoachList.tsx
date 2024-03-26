import { styled } from "styled-components";
import { Spacer } from "../../components/Spacer";
import { applyBoldStyle } from "../../utils/StringUtils";
import ic_coach_1 from "../../resources/ic_coach_1.png";
import ic_coach_2 from "../../resources/ic_coach_2.png";
import ic_coach_3 from "../../resources/ic_coach_3.png";
import ic_coach_4 from "../../resources/ic_coach_4.png";
import ic_coach_5 from "../../resources/ic_coach_5.png";
import ic_coach_6 from "../../resources/ic_coach_6.png";
import ic_coach_7 from "../../resources/ic_coach_7.png";
import ic_coach_8 from "../../resources/ic_coach_8.png";
import ic_coach_9 from "../../resources/ic_coach_9.png";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  scroll-margin-top: 120px;
`;

const Title = styled.div`
  padding: 10px;
  color: #ffffff;
  font-size: 48px;
  white-space: pre-line;
  text-align: center;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    font-size : 30px;
  }
`;

const CoachParentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 14px;
  column-gap: 10px;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CoachContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: #e3e3e3;
  flex-direction: column;
  border-radius: 10px;

  div.title {
    font-size: 14px;
    color: #000000;
  }

  div.coach_info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    div {
      padding-top: 3px;
      padding-bottom: 3px;
      font-size: 14px;
      color: #000000;
      font-weight: bold;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  div.positions {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const PositionContainer = styled.div<{ position: string }>`
  border-radius: 32px;
  font-size: 9px;
  color: #000000;
  font-weight: bold;
  background-color: ${({ position }) => {
    switch (position) {
      case "android":
        return "#DCEDC8";
      case "backend":
        return "#E1BEE7";
      case "frontend":
        return "#D7CCC8";
      default:
        return "#D9D9D9";
    }
  }};
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

class Coach {
  readonly id: number;
  positions: Array<string>;
  name: string;
  title: string;
  image: string;

  constructor(
    no: number,
    positions: Array<string>,
    name: string,
    title: string,
    image: string
  ) {
    this.id = no;
    this.positions = positions;
    this.name = name;
    this.title = title;
    this.image = image;
  }
}

function CoachList() {
  const title = "내가 원하는 회사의 **현직자를**\n직접 골라보세요";
  const coachList = [
    new Coach(
      1,
      ["backend"],
      "스노우",
      "삼성전자 6년차 서버 개발자",
      ic_coach_1
    ),
    new Coach(
      2,
      ["android", "backend"],
      "스미스",
      "카카오계열사 6년차 안드로이드 개발자",
      ic_coach_2
    ),
    new Coach(
      3,
      ["frontend", "backend"],
      "알버스",
      "프리랜서 7년차 개발자",
      ic_coach_3
    ),
    new Coach(
      4,
      ["devops", "backend", "security"],
      "프레디",
      "외국계 애플리케이션 회사 4년차 보안담당자",
      ic_coach_4
    ),
    new Coach(
      5,
      ["backend"],
      "심플렌",
      "네카라쿠배 중 2곳을 다닌 5년차 개발자",
      ic_coach_5
    ),
    new Coach(
      6,
      ["frontend"],
      "그루트",
      "당근마켓 프론트엔드 6년차",
      ic_coach_6
    ),
    new Coach(
      7,
      ["android"],
      "누누",
      "네카라쿠배 5년차 안드로이드 개발자",
      ic_coach_7
    ),
    new Coach(
      8,
      ["android"],
      "Nathan",
      "네카라쿠배 10년차 안드로이드 개발자",
      ic_coach_8
    ),
    new Coach(
      9,
      ["design"],
      "쿼카",
      "카카오계열사 5년차 프로덕트 디자이너",
      ic_coach_9
    ),
  ];

  return (
    <MainContainer id="coachList">
      <Spacer height="48px" />
      <Title>{applyBoldStyle(title)}</Title>
      <Spacer height="48px" />
      <CoachParentContainer>
        {coachList.map((coach: Coach) => (
          <CoachContainer>
            <div className="title">{coach.title}</div>
            <Spacer height="8px" />
            <div className="positions">
              {coach.positions.map((position) => (
                <PositionContainer position={position}>
                  {"#" + position}
                </PositionContainer>
              ))}
            </div>
            <Spacer height="8px" />
            <div className="coach_info">
              <div>{coach.name}</div>
              <Spacer width="6px" />
              <img src={coach.image} alt="icon" />
            </div>
          </CoachContainer>
        ))}
      </CoachParentContainer>
    </MainContainer>
  );
}

export default CoachList;
