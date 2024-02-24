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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: auto;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
  width: 80px;
  color: white;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: 60px;
  }
`;

const StyledInput = styled.input<{ width?: string; height?: string }>`
  border: 1px solid #0074e4;
  border-radius: 4px;
  padding: 8px;
  color: black;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
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
