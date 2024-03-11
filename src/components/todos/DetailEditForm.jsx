import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modalRoutePath, modalTextChange } from "../../redux/modules/stateModalSlice";
import { detailTodo, editTodo } from "../../redux/modules/todosSlice";
import { inputValueTrim } from "../../util/inputValueTrim";
import Input from "../common/Input";
import Button from "../common/Button";
import styled from "styled-components";

function DetailEditForm() {
  const [editValue, setEditValue] = useState({
    title: "",
    content: "",
  });

  const todoDetail = useSelector((state) => state.todosFetch.todo);
  const { id } = useParams();
  const dispatch = useDispatch();

  const setState = (newKey, newValue) => {
    setEditValue((prevState) => ({
      ...prevState,
      [newKey]: newValue,
    }));
  };

  const handleSubmit = (id, bodyObj) => {
    dispatch(editTodo({ id, ...bodyObj }));
    dispatch(modalTextChange("내용이 수정되었습니다."));
    dispatch(modalRoutePath("/todo/list"));
  };

  useEffect(() => {
    dispatch(detailTodo(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (todoDetail) {
      const newState = {
        title: todoDetail.title,
        content: todoDetail.content,
      };
      setEditValue(newState);
    }
  }, [todoDetail]);

  return (
    <FormContainer>
      {todoDetail.title ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            inputValueTrim(editValue.title) && inputValueTrim(editValue.content)
              ? handleSubmit(id, editValue)
              : dispatch(modalTextChange("제목과 내용을 모두 입력해주세요!"));
          }}>
          <h3>id: {id}</h3>
          <>
            <h4>제목</h4>
            <Input
              type="title"
              placeholder="제목을 입력해주세요"
              valueState={editValue.title}
              onChangeFnc={setState}
            />
          </>
          <>
            <h4>내용</h4>
            <textarea
              placeholder="내용을 입력해주세요"
              value={editValue.content}
              onChange={(e) => setState("content", e.target.value)}></textarea>
          </>
          <Button>수정 하기</Button>
        </Form>
      ) : (
        <p>...로딩중</p>
      )}
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

export default DetailEditForm;
