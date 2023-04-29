import * as React from "react";
import { Link, PageProps } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { media } from "../utils/mediaQueries";

const NotFoundPageStyles = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;

  width: 100vw;
  height: 100%;

  .text-container {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    h1 {
      font-size: 1.5rem;
      line-height: 1;

      margin: 0;
    }
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
    box-shadow: var(--shadow);

    width: 200px;
    height: 200px;

    ${media.tablet} {
      width: 250px;
      height: 250px;
    }
  }
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFoundPageStyles>
      <StaticImage
        src="../assets/images/404.jpg"
        alt="404"
        placeholder="blurred"
      />
      <div className="text-container">
        <h1>Page not found</h1>
        <p>Sorry 😔, we couldn't find what you were looking for.</p>
      </div>
      <Link to="/" className="link-btn primary">
        Go home
      </Link>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
