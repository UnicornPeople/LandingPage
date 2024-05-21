import { styled } from "styled-components";
import { Spacer } from "../_components/Spacer";


const Container = styled.header`
  padding-left: 205px;
  padding-right: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F7F8;
`;

function SellingPointSection() {
    return (
      <Container>
        <Spacer height="80px"/>
        <Spacer height="80px"/>
      </Container>
    );
  }
  
  export default SellingPointSection;
  