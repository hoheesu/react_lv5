import React from "react";
import TodoList from "../components/todos/TodoList";
import withAuth from "../HOC/withAuth";
import styled from "styled-components";
import Button from "../components/common/Button";
import { PageWrap } from "../styles/PageWrapFlexStyle";

function TodoLists() {
  return (
    <PageWrap>
      <TodoList />
      <Button>할 일 추가 페이지 가기</Button>
    </PageWrap>
  );
}

export default withAuth(TodoLists, false);
