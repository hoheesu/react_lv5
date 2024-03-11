import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
 :root {
    background-color: #69b1ff;

    /* color */
    --color-main: #69b1ff;
    --color-white: #fff;
    --color-light-gray: #ddd;
    --color-black: #444;
    --color-green: #69ff8f;
    --color-purple: #8c69ff;
    --color-red: #ff6969;
 }
 *{
   box-sizing: border-box;
   transition: all 0.3s;
 }
  a{
   text-decoration: none; 
   outline: none;
}
 h2{
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-white);
 }
 button{
   background-color: var(--color-white);
   cursor: pointer;
   box-shadow: 0 2px 4px #00000028, 0 2px 4px #0000003a;
  &:hover {
    box-shadow: 0 3px 6px #00000028, 0 3px 6px #0000003a;
  }
  &:active {
    box-shadow: inset 0 0 5px;
  }
 }
`;

export default GlobalStyle;
