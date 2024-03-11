import React from "react";
import styled from "styled-components";

function Input({ type, placeholder, valueState, onChangeFnc }) {
  return (
    <InputStyle
      type={type === "password" ? "password" : "text"}
      placeholder={placeholder}
      value={valueState}
      onChange={(e) => onChangeFnc(type, e.target.value)}
    />
  );
}

const InputStyle = styled.input`
  border: 2px solid var(--color-black);
  transition: all 0.4s;
  &:focus {
    outline: none;
    border: 2px solid var(--color-purple);
  }
`;

export default Input;
