import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <MainContainer>
      <DropletSpinnerContainer>
        <Droplet />
        <Droplet />
        <Droplet />
      </DropletSpinnerContainer>
    </MainContainer>
  );
};

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DropletSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const Droplet = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: var(--color-red);
  border-radius: 50%;
  transform-origin: center bottom;
  animation: ${bounce} 1.2s cubic-bezier(0.3, 0.01, 0.4, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.4s;
  }

  &:nth-child(2) {
    animation-delay: -0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0s;
  }
`;

export default LoadingSpinner;
