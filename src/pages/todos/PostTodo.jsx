import React from "react";
import TodoForm from "../../components/todos/TodoForm";
import withAuth from "../../HOC/withAuth";

import { PageWrap } from "../../styles/PageWrapFlexStyle";

function PostTodo() {
  return (
    <PageWrap>
      <TodoForm />
    </PageWrap>
  );
}

export default withAuth(PostTodo, false);
