import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    background-color: #566fd8;
  }
 
  div, section, button{
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box
  }
  h1 {
    font-size: 34px;
    font-weight: bold;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    display: flex;
    cursor: pointer;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
  };
  input {
    outline: none;
    padding-left: 15px;
    border-radius: 30px;
    border : 1px solid black;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-weight: bold
    }
  }
  ::selection {
    color: #fff;
    background-color: #566fd8;
  }
  strong {
    font-weight: bold;
  }
`;

export default GlobalStyles;
