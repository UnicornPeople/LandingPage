import { ChangeEvent, useState } from "react";
import styles from "./ApplySection.module.scss";
import { APPLY_DISCORD_WEBHOOK_URL } from "../../../Const";
import TextField from "./TextField";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import SelectableButton from "./SelectableButton";
import isMobile from "../../../utils/CommonUtils";
import { getAnalytics, logEvent } from "firebase/analytics";
import ic_naver from "../../../resources/ic_naver.png";
import ic_kakao from "../../../resources/ic_kakao.png";
import ic_line from "../../../resources/ic_line.png";
import ic_coupang from "../../../resources/ic_coupang.png";
import ic_baemin from "../../../resources/ic_baemin.png";
import ic_carrot from "../../../resources/ic_carrot.png";
import ic_toss from "../../../resources/ic_toss.png";
import ic_samsung from "../../../resources/ic_samsung.png";
import ic_skt from "../../../resources/ic_skt.png";
import ic_hyundai from "../../../resources/ic_hyundai.png";

const StyledH1 = styled.h1`
  color: #f0eff3;
  font-size: 32px;
  line-height: 36px;
  padding-left : 20px;
  padding-right: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;
  text-align: center;

    /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    font-size : 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 120px;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: auto;
  }
`;

function buildMessage(
  companys: string[],
  positions: string[],
  name: string,
  phone: string
) {
  return (
    "지원 회사 : " +
    companys.join(", ") +
    "\n" +
    "지원 포지션 : " +
    positions.join(", ") +
    "\n" +
    "이름 : " +
    name +
    "\n" +
    "연락처 : " +
    phone
  );
}

function sendMessage(message: string | undefined) {
  const currentUrl = window.location.href;
  if (!message) {
    alert("message are required");
    return;
  }

  var payload = {
    content: "[시스템정보]\n접속 url:" + currentUrl + "\n[신청정보]\n" + message + "\n-----------\n",
  };

  fetch(APPLY_DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        alert("지원자분과 맞는 코치들을 모아\n1~2일 내에 연락드리겠습니다.");
      } else {
        alert("Failed to send message");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while sending the message");
    });
}

function ApplySection() {

  const companyList = [
    {
      "id": "naver",
      "name": "네이버",
      "src": ic_naver
    },
    {
      "id": "kakao",
      "name": "카카오",
      "src": ic_kakao
    },
    {
      "id": "line",
      "name": "라인",
      "src": ic_line
    },
    {
      "id": "coupang",
      "name": "쿠팡",
      "src": ic_coupang
    },
    {
      "id": "baemin",
      "name": "배민",
      "src": ic_baemin
    },
    {
      "id": "carrot",
      "name": "당근",
      "src": ic_carrot
    },
    {
      "id": "toss",
      "name": "토스",
      "src": ic_toss
    },
    {
      "id": "samsung",
      "name": "삼성전자",
      "src": ic_samsung
    },
    {
      "id": "skt",
      "name": "SKT",
      "src": ic_skt
    },
    {
      "id": "hyundai",
      "name": "현대자동차",
      "src": ic_hyundai
    },
  ]

  const positions = [
    "백엔드",
    "프론트엔드",
    "안드로이드",
    "iOS",
    "데브옵스/보안",
    "AI/머신러닝",
    "UI/UX디자인",
    "제품디자인",
  ];

  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [checkedCompanyIds, setCheckedCompanyIds] = useState(new Set)

  const koreanPhoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/;

  const onSubmitClick = () => {
    const analytics = getAnalytics();

    console.log(checkedCompanyIds);
    if (checkedCompanyIds.size < 1 || name.length < 1 || (!koreanPhoneNumberRegex.test(phoneNumber) && phoneNumber.length < 10)) {
      alert("올바른 정보를 입력해주세요")
      logEvent(analytics, "home_apply_submit_click_not_valid", {});
    } else {
      let selectedCompanyList = companyList.filter((company) => checkedCompanyIds.has(company.id))
        .map((company) => company.name)
      console.log(selectedCompanyList);
      sendMessage(
        buildMessage(selectedCompanyList, selectedPositions, name, phoneNumber)
      )
      logEvent(analytics, "home_apply_submit_click", {});
    }
  }

  const handlePhoneNumberChange = (value: string) => {
    const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    setPhoneNumber(formattedValue);
  };

  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);

  const handlePositionClick = (option: string) => {
    setSelectedPositions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(
          (selectedOption) => selectedOption !== option
        )
        : [...prevSelectedOptions, option]
    );
  };

  const onCompanyClick = (company: any) => {
    const newSet = new Set(checkedCompanyIds);
    if (checkedCompanyIds.has(company.id)) {
      newSet.delete(company.id)
    } else {
      newSet.add(company.id)
    }
    console.log("click : " + company)
    console.log(newSet)
    setCheckedCompanyIds(newSet)
  }

  return (
    <Container id="applyForm">

      <Spacer height="48px" />
      <StyledH1>다니고 싶은 회사를 모두 선택해주세요</StyledH1>

      <div className={styles.position_container}>
        {
          companyList.map((company) => {
            const checked = checkedCompanyIds.has(company.id)

            return (
              <label onClick={() => onCompanyClick(company)}>
                <div className={`${styles.iconBox} ${checked ? styles.iconBoxChecked : ""}`}>
                  <img src={company.src} alt="icon" className={styles.companyLogo} />
                  <span><b>{company.name}</b></span>

                </div>
              </label>
            )
          })
        }
      </div>

      <Spacer height="48px" />
      <StyledH1>고민중인 포지션을 모두 골라주세요</StyledH1>

      <div className={styles.position_container}>
        {positions.map((position) => (
          <label>
            <SelectableButton
              label={position}
              isSelected={selectedPositions.includes(position)}
              onChange={() => handlePositionClick(position)}
            />
          </label>
        ))}
      </div>

      <Spacer height="24px" />

      <InputContainer>
        <TextField
          label="이름"
          width={isMobile() ? "160px" : "auto"}
          value={name}
          placeholder="김철수"
          onChange={(value) => setName(value)}
        />
        <Spacer height="24px" />
        <TextField
          label="연락처"
          width={isMobile() ? "160px" : "240px"}
          value={phoneNumber}
          placeholder="010-1234-5678, 숫자만 입력하세요."
          onChange={(value) => handlePhoneNumberChange(value)}
        />
      </InputContainer>

      <input type="submit" className={styles.submit} onClick={() => onSubmitClick()} value="코치 리스트 조회하기" />
    </Container>
  );
}

export default ApplySection;
