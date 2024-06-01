'use client';

import StyledComponentsRegistry from './_lib/registry';
import { ThemeProvider } from 'styled-components';
import theme from './_styles/theme';
import GlobalStyles from './_styles/global-styles';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
    <GlobalStyles/>
      <ThemeProvider theme={theme}>
        {props.children} 
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers