import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #6B9080;
    --color-text-main: #24252E;
    --color-danger: #D01E29;
    --color-success: #217B00;
    --color-info: #0069D0;
    --color-alert: #FCCE74;
    --color-surface: #F0F0F5;
    --color-divider: #D3D4DD;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font: 0.8125rem 'Roboto', sans-serif;
    color: var(--color-text-main);
  }

  a {
    text-decoration: none;

    &,
    &:active,
    &:visited {
      color: var(--color-text-main);
    }

    &:hover {
      color: var(--color-primary);
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
