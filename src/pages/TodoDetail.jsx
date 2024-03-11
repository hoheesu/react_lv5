import React from "react";
import DetailEditForm from "../components/todos/DetailEditForm";
import styled from "styled-components";
import { PageWrap } from "../styles/PageWrapFlexStyle";

function TodoDetail() {
  return (
    <PageWrap>
      <DetailEditForm />
    </PageWrap>
  );
}

export default TodoDetail;
