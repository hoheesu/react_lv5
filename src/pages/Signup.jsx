import React from "react";
import UserInfoForm from "../components/common/UserInfoForm";
import { useNavigate } from "react-router-dom";
import { requestSignUp } from "../axios/api";
import { LoginSignupLayout, H2, LoginSignupContainer } from "../styles/LoginFormStyleModule";
import withAuth from "../HOC/withAuth";

function Signup() {
  const navigate = useNavigate();
  const handleGotoLogin = () => {
    navigate("/login");
  };

  return (
    <LoginSignupLayout>
      <H2>회원가입 페이지</H2>
      <LoginSignupContainer>
        <UserInfoForm getUserApi={requestSignUp} handleGotoPage={handleGotoLogin}>
          회원가입
        </UserInfoForm>
      </LoginSignupContainer>
    </LoginSignupLayout>
  );
}

export default withAuth(Signup, true);
