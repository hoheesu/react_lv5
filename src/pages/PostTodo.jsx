import React from "react";
import TodoForm from "../components/todos/TodoForm";
import withAuth from "../HOC/withAuth";
import styled from "styled-components";
import { PageWrap } from "../styles/PageWrapFlexStyle";

function PostTodo() {
  return (
    <PageWrap>
      <TodoForm />
    </PageWrap>
  );
}

export default withAuth(PostTodo, false);
