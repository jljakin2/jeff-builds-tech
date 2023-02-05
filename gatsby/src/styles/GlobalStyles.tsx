import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --red: #FF4949;
  }

  html {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      font-size: 100%; // 16px
    }

  body {
    font-size: 1rem;
    font-family: "Open Sans", --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  *, *::before, *::after {
      box-sizing: inherit;

      margin: 0;
      padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 1.35rem;
    font-weight: 400;
    border-radius: 2px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;

    svg {
      margin-right: 0.5rem;
    }
  }

  button.primary {
    background: $primary-500;
    border: 1px solid $primary-500;
    color: $white;

    &:hover {
      background: $primary-400;
    }
  }

  button.secondary {
    border: 1px solid $primary-500;
    color: $primary-500;
    background: transparent;

    &:hover {
      background: $primary-500;
      color: $white;
    }
  }

  button.normal {
    padding: 0.5rem 1rem;
  }

  button.small {
    padding: 0.25rem 1rem;
  }

  button.full-width {
    width: 100%;
    padding: 0.75rem 1rem;
  }

  img {
    max-width: 100%;
  }



  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

`;

export default GlobalStyles;
