import React from "react";
import styled from "styled-components";

interface SelectableButtonProps {
  label: string;
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
}

const SelectableButtonWrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  width: 120px;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 24px;
  font-size: 15px;
  transition: 0.5s;
  user-select: none;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#0074e4" : "#303030")};
  font-weight: ${({ isSelected }) => (isSelected ? 500 : 400)};
  &:hover {
    background-color: #6ea8df;
  }
`;

const SelectableButton: React.FC<SelectableButtonProps> = ({
  label,
  isSelected,
  onChange,
}) => {
  return (
    <SelectableButtonWrapper
      isSelected={isSelected}
      onClick={() => onChange(!isSelected)}
    >
      {label}
    </SelectableButtonWrapper>
  );
};

export default SelectableButton;
