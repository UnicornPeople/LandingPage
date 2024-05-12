import { RuleSet, css } from "styled-components";

export const isMobile = () => {
  return window.innerWidth <= 767;
};

export const mobileMediaQuery = (styles: RuleSet<object>) => css`
  @media only screen and (max-width: 767px) {
    ${styles}
  }
`;