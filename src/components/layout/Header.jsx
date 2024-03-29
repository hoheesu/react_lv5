// Main.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import { requestUserCheck } from "../../axios/api";
import styled from "styled-components";

function Header() {
  const [isToken, setIsToken] = useState();
  const params = useParams();
  const cookie = new Cookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3540); // 현재 시간에 분을 더해 만료 시간 설정
    cookie.remove("token", {
      path: "/",
      expires: time,
    });
    window.location.reload();
  };

  const goToMainPage = () => {
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      const result = await requestUserCheck();
      if (result !== "OK") {
        setIsToken(false);
      } else {
        setIsToken(true);
      }
    })();
  }, [params]);

  return (
    <Nav>
      <button onClick={goToMainPage}>
        <h1>윤준수 Todo</h1>
      </button>
      {isToken ? <button onClick={handleLogout}>로그아웃</button> : null}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 3rem;
  justify-content: space-between;
  padding: 0.5rem 3rem;
  box-sizing: border-box;
  button {
    &:hover {
      color: var(--color-white);
      background-color: var(--color-green);
    }
  }
`;

export default Header;
