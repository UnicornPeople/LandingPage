import { styled } from "styled-components";

export const Spacer = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;