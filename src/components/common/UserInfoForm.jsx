import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inputValueTrim } from "../../util/inputValueTrim";
import Input from "./Input";
import Button from "./Button";
import { FormWrap, FormStyle } from "../../styles/LoginFormStyleModule";
import { modalTextChange, modalRoutePath } from "../../redux/modules/stateModalSlice";

function UserInfoForm({ children, getUserApi, handleGotoPage }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });

  const setState = (newKey, newValue) => {
    setInputValue((prevState) => {
      const newState = { ...prevState, [newKey]: newValue };
      return newState;
    });
  };

  const handleOnSubmit = async () => {
    try {
      const res = await getUserApi(inputValue);
      dispatch(modalTextChange(res));
      dispatch(modalRoutePath(children === "로그인" ? "/" : "/login"));
    } catch (error) {
      console.log("에러발생", error);
      dispatch(modalTextChange(error));
    }
  };

  return (
    <FormWrap>
      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          inputValueTrim(inputValue.id) && inputValueTrim(inputValue.password)
            ? handleOnSubmit()
            : dispatch(modalTextChange("id와 비밀번호 모두 입력해주세요"));

          setInputValue({
            id: "",
            password: "",
          });
        }}>
        <Input
          type="id"
          placeholder="ID를 입력하세요"
          valueState={inputValue.id}
          onChangeFnc={setState}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          valueState={inputValue.password}
          onChangeFnc={setState}
        />
        <Button type="submit">{children}</Button>
      </FormStyle>
      <Button onClickFnc={handleGotoPage}>
        {children === "로그인" ? "회원가입 하고오기" : "로그인 하러가기"}
      </Button>
    </FormWrap>
  );
}

export default UserInfoForm;
