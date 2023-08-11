import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-primary-100: #4357AC;
    --color-primary-050: #8294CD;
    --color-primary-020: #B3C2E7;
    --color-primary-010: #E2EFFF;
    --color-inactive: #E2EFFF;
    --color-light-gray: #F5F5F5;
    --color-gray-900: #111827;
    --color-gray-800: #1F2937;
    --color-gray-700: #374151;
    --color-gray-600: #4B5563;
    --color-gray-500: #6D7280;
    --color-gray-400: #7B7B7B;
    --color-gray-300: #D2D5DA;
    --color-gray-200: #ECECEC;
    --color-gray-100: #F3F4F6;
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
  }
 
  div, section, button{
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
    padding-left: 20px;
    border-radius: 30px;
    border : 1px solid black;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-size: 16px;
      font-weight: bold
    }
  }
  ::selection {
    color: #000;
    background-color: var(--color-yellow);
  }
  strong {
    font-weight: bold;
  }
`;

export default GlobalStyles;