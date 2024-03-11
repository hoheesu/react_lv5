import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalTextChange } from "../redux/modules/stateModalSlice";
import styled from "styled-components";
import Button from "../components/common/Button";

const StateModalPortal = () => {
  const navigate = useNavigate();
  const modalText = useSelector((state) => state.modalState.modalText);
  const routePath = useSelector((state) => state.modalState.routePath);

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    navigate(routePath);
    dispatch(modalTextChange(""));
  };
  return (
    <>
      <Background onClick={handleCloseModal}></Background>
      <ModalMain>
        <p>{modalText}</p>
        <ButtonBox>
          <Button onClickFnc={handleCloseModal}>확인</Button>
        </ButtonBox>
      </ModalMain>
    </>
  );
};

export default StateModalPortal;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: #33333388;
  z-index: 100;
`;

const ModalMain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  padding: 1rem;
  width: 20rem;
  height: 10rem;
  z-index: 101;
  background-color: #fff;
  border: 2px solid #333;
  color: #333;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
