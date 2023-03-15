import { createGlobalStyle } from "styled-components";
import { media } from "../utils/mediaQueries";

const GlobalStyles = createGlobalStyle`

  :root {
    --text: #2A272A;
    --lightText: rgba(42, 39, 42, .75);
    --veryLightText: rgba(42, 39, 42, .6);

    --white: #fefefe;
    --bg: #f9f9f9;
    --inputBorder: #CFCFCF;
    --grey-500: #94a3b8;
    --grey-400: #667085;

    --primary-500: #1B2E40;
    --primary-500--hover: rgba(27, 46, 64, .7);

    --secondary-500: #49BAAC;
    --secondary-500--hover: rgba(73, 186, 172, .7);

    /* --skillsBar: "##1B2E40"; */
    /* --leadership: "#49BAAC"; */

    --error: #F67280;

    /* inset | offset-x | offset-y | blur-radius | color */
    --inner-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12); // text inputs
    --shadow: 0.25rem 0.25rem 1rem 0 rgba(0, 0, 0, 0.25); // base shadow
    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */
    --shadow--hover: 5px 6px 12px -2px rgba(38, 38, 38, 0.21); // quick actions hover event on homepage
    --shadow--inverse: -3px 4px 12px -2px rgba(0, 0, 0, 0.25); // just for preview panel
    --shadow--dropdown: 1px 1px 2px rgba(0, 0, 0, 0.12); // just for dropdown menus

    --radius: 0.5rem; // border radius

    --gutter: 1rem; // 16px

    ${media.tablet} {
      --gutter: 1.5rem; // 24px
    }

    ${media.laptop} {
      --gutter: 2.5rem;
    }

    ${media.desktop} {
      --gutter: 5rem;
    }

  }

  *, *::before, *::after {
      box-sizing: inherit;

      margin: 0;
      padding: 0;
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
    color: var(--text);
  }

  ul, ol {
    list-style: none;
  }

  /* button {
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
  } */



  .link-btn {
    border: 1px solid transparent;
    border-radius: var(--radius);
    padding: 0.5rem 1rem;

    transition: all 0.2s ease-in;

    &.primary {
      background: var(--primary-500);
      color: var(--white);

      &:hover {
        background: var(--primary-500--hover);
      }
    }

    &.secondary {
      background: var(--secondary-500);
      color: var(--white);

      &:hover {
        background: var(--secondary-500--hover);
      }
    }

    &.outline {
      background: var(--white);
      border: 1px solid var(--primary-500);
      color: var(--primary-500);

      &:hover {
        background: var(--primary-500);
        color: var(--white);
      }
    }
  }

  .red-link-btn {
    background: var(--error);
    color: var(--white);
    border-radius: 1rem;
    cursor: pointer;

    align-self: center;

    padding: 0.5rem 0.75rem;

    transition: all 0.2s ease-in;

    &:hover {
      background: rgba(247, 122, 135, 0.9);
    }
  }

  button.primary {
    background: var(--primary-500);
    border: 1px solid var(---primary-500);
    border-radius: var(--radius);
    color: var(--white);

    &:hover {
      background: var(--primary-500--hover);
    }
  }

  /* button.secondary {
    border: 1px solid $primary-500;
    color: $primary-500;
    background: transparent;

    &:hover {
      background: $primary-500;
      color: $white;
    }
  } */

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
