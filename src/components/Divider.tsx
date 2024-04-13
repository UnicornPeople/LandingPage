import { styled } from "styled-components";

export const Divider = styled.div<{
  width?: string;
  height?: string;
  color?: string;
}>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background-color: ${({ color }) => color || ""};
`;
