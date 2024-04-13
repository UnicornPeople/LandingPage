import { styled } from "styled-components";
import ic_naver from "../../resources/ic_naver.png";
import ic_kakao from "../../resources/ic_kakao.png";
import ic_line from "../../resources/ic_line.png";
import ic_coupang from "../../resources/ic_coupang.png";
import ic_baemin from "../../resources/ic_baemin.png";
import ic_carrot from "../../resources/ic_carrot.png";
import ic_toss from "../../resources/ic_toss.png";
import { Spacer } from "../../components/Spacer";
import { useNavigate } from "react-router-dom";
import { DefaultContainer } from "../../components/DefaultContainer";

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  font-weight: 500;
`;

const CompanyContainer = styled.div`
  padding: 16px;
  border: 1px solid #343434;
  border-radius: 12px;
  background-color: #ffffff;

  cursor: pointer;
`;

const CompanyTitleSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  img {
    width: 60px;
    height: 60px;
    border: 1px solid #cacaca;
    border-radius: 20px;
  }

  div.company_name {
    color: #000000;
    font-weight: bold;
  }

  .company_careers {
    align-self: flex-start;
    font-size: 12px;
    margin-left: auto;
    background-color: #dbdbdb;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
    color: #000000;
  }
`;

const CompanywelfareListSection = styled.div`
  display: flex;
  gap: 12px;

  div {
    font-size: 12px;
    background-color: #74e065;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
    color: #139b01;
  }
`;

function CompanyPage() {
  const companyList = [
    {
      id: "naver",
      name: "네이버",
      src: ic_naver,
      welfare: ["유연근무제", "재택 근무", "사내 헬스장"],
    },
    {
      id: "kakao",
      name: "카카오",
      src: ic_kakao,
      welfare: ["유연근무제", "재택 근무", "사내 헬스장"],
    },
    {
      id: "line",
      name: "라인",
      src: ic_line,
      welfare: ["유연근무제", "재택 근무", "사내 헬스장"],
    },
    {
      id: "coupang",
      name: "쿠팡",
      src: ic_coupang,
      welfare: ["유연근무제", "재택 근무", "사내 헬스장"],
    },
    {
      id: "baemin",
      name: "배달의 민족",
      src: ic_baemin,
      welfare: ["유연근무제", "재택 근무", "사내 헬스장"],
    },
    {
      id: "carrot",
      name: "당근",
      src: ic_carrot,
      welfare: ["유연근무제", "재택 근무"],
    },
    {
      id: "toss",
      name: "토스",
      src: ic_toss,
      welfare: ["사내 헬스장"],
    },
  ];

  const navigate = useNavigate();

  return (
    <DefaultContainer>
      <Contents>
        {companyList.map((company) => {
          return (
            <CompanyContainer
              onClick={() => {
                navigate("/company/" + company.id);
              }}
            >
              <CompanyTitleSection>
                <img src={company.src} alt="icon" />
                <Spacer width="12px" />
                <div className="company_name">{company.name}</div>
                <Spacer width="12px" />
                <div className="company_careers">{"채용 공고 8"}</div>
              </CompanyTitleSection>
              <Spacer height="24px" />
              <CompanywelfareListSection>
                {company.welfare.map((element) => {
                  return <div>{element}</div>;
                })}
              </CompanywelfareListSection>
            </CompanyContainer>
          );
        })}
      </Contents>
    </DefaultContainer>
  );
}

export default CompanyPage;
