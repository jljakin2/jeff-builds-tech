import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 3.625rem;
        letter-spacing: 2px;
    }

    h2 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2.75rem;
        letter-spacing: 1.42857px;
    }

    h3 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.25rem;
        letter-spacing: 1.14286px;
    }

    h4 {
        font-weight: 600;
        font-size: 1.75rem;
        line-height: 2.375rem;
        letter-spacing: 2px;
    }

    h5 {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.0625rem;
        letter-spacing: 1.71429px;
    }

    h6 {
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.5625rem;
        letter-spacing: 1.28571px;
    }

    p {
        font-weight: 300;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
    }

    a {
        text-decoration: none ;
        cursor: pointer;
    }
`;
