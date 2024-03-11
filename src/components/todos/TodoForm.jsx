import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../common/Input";
import Button from "../common/Button";
import { modalTextChange, modalRoutePath } from "../../redux/modules/stateModalSlice";
import { inputValueTrim } from "../../util/inputValueTrim";
import { postTodos } from "../../redux/modules/todosSlice";
import styled from "styled-components";

function TodoForm() {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });
  const dispatch = useDispatch();

  const setState = (newKey, newValue) => {
    setInputValue((prevState) => {
      const newState = { ...prevState, [newKey]: newValue };
      return newState;
    });
  };

  const handleOnSubmit = async () => {
    dispatch(postTodos(inputValue));
    dispatch(modalTextChange(`[ ${inputValue.title} ] 추가 완료`));
    dispatch(modalRoutePath("/todo/list"));
  };

  return (
    <FormContainer>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          inputValueTrim(inputValue.title) && inputValueTrim(inputValue.content)
            ? handleOnSubmit()
            : dispatch(modalTextChange("id와 비밀번호 모두 입력해주세요"));

          setInputValue({
            title: "",
            content: "",
          });
        }}>
        <>
          <h4>제목</h4>
          <Input
            type="title"
            placeholder="제목을 입력해주세요"
            valueState={inputValue.title}
            onChangeFnc={setState}
          />
        </>
        <>
          <h4>내용</h4>
          <textarea
            placeholder="내용을 입력해주세요"
            value={inputValue.content}
            onChange={(e) => setState("content", e.target.value)}></textarea>
        </>
        <Button>작성</Button>
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 600px;
  padding: 2rem;
  background-color: var(--color-white);
  border: 4px solid var(--color-black);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  & > textarea {
    height: 300px;
    resize: none;
    border: 2px solid var(--color-black);
  }
  & > button {
    background-color: var(--color-green);
  }
`;

export default TodoForm;
