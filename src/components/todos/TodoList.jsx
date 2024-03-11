import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, getTodos } from "../../redux/modules/todosSlice";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import { modalRoutePath, modalTextChange } from "../../redux/modules/stateModalSlice";
import LoadingSpinner from "../layout/LoadingSpinner";

function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const todos = useSelector((state) => state.todosFetch.todos);

  const handleDelete = (id) => {
    (async () => {
      setIsLoading(true);
      await dispatch(deleteTodos(id));
      dispatch(modalTextChange("삭제가 완료되었습니다."));
      dispatch(modalRoutePath(`${location.pathname}`));
      setIsLoading(false);
      dispatch(getTodos(id));
    })();
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await dispatch(getTodos());
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      {isLoading ? <LoadingSpinner /> : null}
      {todos.map((todo, index) => (
        <TodoItem key={index}>
          <TodoContent>
            <TextWrap>
              <TodoText>Title: {todo.title}</TodoText>
              <TodoText>Content: {todo.content}</TodoText>
            </TextWrap>
            <ButtonWrap>
              <Button
                onClickFnc={() => {
                  handleDelete(todo.id);
                }}>
                삭제
              </Button>
              <Button onClickFnc={() => navigate(`${todo.id}`)}>수정</Button>
            </ButtonWrap>
          </TodoContent>
        </TodoItem>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  width: 850px;
  height: 500px;
  background-color: #fff;
  overflow-y: scroll;

  padding: 2rem;
  border: 4px solid var(--color-black);
`;

const TodoItem = styled.li`
  width: 100%;
  border: 3px solid var(--color-black);
  border-radius: 5px;
  margin-bottom: 0.8rem;
  padding: 10px;
`;

const TodoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;
const TodoText = styled.p`
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  height: 1.2rem;
  line-height: 1.2rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  button {
    width: 7rem;
    &:nth-child(1) {
      background-color: var(--color-red);
      color: var(--color-white);
    }
    &:nth-child(2) {
      background-color: var(--color-green);
    }
  }
`;

export default TodoList;
