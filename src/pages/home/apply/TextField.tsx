import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface TextFieldProps {
  label: string;
  width?: string;
  height?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Container = styled.div`
  width: 500px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 24px;
  display: flex;
  align-items: center;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: 280px;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
  width: 100px;
  color: white;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: 60px;
  }
`;

const StyledInput = styled.input<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: 6px 12px;
  background: rgb(31, 32, 35);
  border: 1px solid rgb(60, 63, 68);
  border-radius: 4px;
  font-size: 13px;
  color: rgb(247, 248, 248);
  height: 46px;
  appearance: none;
  transition: border 0.15s ease 0s;
  flex-grow: 1;
`;

const TextField: React.FC<TextFieldProps> = ({
  label,
  width,
  height,
  value,
  placeholder,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <Container>
      <StyledLabel htmlFor="myInput">{label}</StyledLabel>
      <StyledInput
        type="text"
        id="myInput"
        value={value}
        onChange={handleChange}
        width={width}
        height={height}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextField;
