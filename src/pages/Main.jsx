// Main.jsx
import React, { useState, useEffect } from "react";
import withAuth from "../HOC/withAuth";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Main() {
  return (
    <nav>
      <PageRouteList>
        <li>
          <LinkStyle to="/todo/post">할일 작성하러 가기 ⏎</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/todo/list">할일 리스트 ⏎</LinkStyle>
        </li>
      </PageRouteList>
    </nav>
  );
}
const PageRouteList = styled.ul`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  > li {
    width: 20rem;
  }
`;
const LinkStyle = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 2px solid var(--color-black);
  background-color: var(--color-white);
  color: var(--color-black);
  box-shadow: 0 3px 6px #00000028, 0 3px 6px #0000003a;
  &:hover {
    box-shadow: 0 6px 9px #00000028, 0 6px 9px #0000003a;
  }
  &:active {
    box-shadow: inset 0 0 10px;
  }
`;

export default withAuth(Main, false);
