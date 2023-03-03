import { createGlobalStyle } from "styled-components";
import { media } from "../utils/mediaQueries";

export const Typography = createGlobalStyle`
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 2px;

        ${media.tablet} {
            font-size: 3.5rem;
            line-height: 3.625rem;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 2.75rem;
        letter-spacing: 1.43px;

        ${media.tablet} {
            font-size: 2.5rem;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2rem;
        letter-spacing: 1.14px;

        ${media.tablet} {
            font-size: 2rem;
        }
    }

    h4 {
        font-weight: 600;
        font-size: 1.5rem;
        letter-spacing: 2px;

        ${media.tablet} {
            font-size: 1.75rem;
        }
    }

    h5 {
        font-weight: 400;
        font-size: 1.25rem;
        letter-spacing: 1.71px;

        ${media.tablet} {
            font-size: 1.5rem;
        }
    }

    h6 {
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 1.28px;

        ${media.tablet} {
            font-size: 1.125rem;
        }
    }

    p {
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.5625rem;
        letter-spacing: 0;
    }

    a {
        text-decoration: none ;
        cursor: pointer;
    }
`;
