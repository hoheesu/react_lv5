import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  & > button {
    font-size: 1.5rem;
    background-color: var(--color-white);
    width: fit-content;
  }
`;
