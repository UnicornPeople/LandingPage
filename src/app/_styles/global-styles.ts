import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Pretendard';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 100;
        src: url("../../public/fonts/Pretendard-Light.woff") format("woff");
        font-display: swap;
    }

    @font-face {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: normal;
        src: url("../../public/fonts/Pretendard-Regular.woff") format("woff");
        font-display: swap;
    }

    @font-face {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        src: url("../../public/fonts/Pretendard-Medium.woff") format("woff");
        font-display: swap;
    }

    @font-face {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: bold;
        src: url("../../public/fonts/Pretendard-Bold.woff") format("woff");
        font-display: swap;
    }

    @font-face {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: lighter;
        src: url("../../public/fonts/Pretendard-Thin.woff") format("woff");
        font-display: swap;
    }
`;

export default GlobalStyles;