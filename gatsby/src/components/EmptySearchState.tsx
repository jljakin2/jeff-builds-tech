import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { media } from "../utils/mediaQueries";
import { Link } from "gatsby";

const EmptySearchStateStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  .image-container {
    border-radius: 50%;
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
    box-shadow: var(--shadow);

    width: 150px;
    height: 150px;

    ${media.tablet} {
      width: 200px;
      height: 200px;
    }
  }

  .text-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .btn-container {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
`;

export default function EmptySearchState({ handleEmptySearch }: any) {
  function triggerEmptySearch() {
    handleEmptySearch();
  }

  return (
    <EmptySearchStateStyles>
      <div className="image-container">
        <StaticImage
          src="../assets/images/ice-cream.jpg"
          alt="Ice cream cone that spilled on the ground"
          placeholder="blurred"></StaticImage>
      </div>
      <div className="text-container">
        <h5>Uh oh.</h5>
        <p>
          Do you think there is something I should build that I haven’t yet? Let
          me know 👍
        </p>
      </div>
      <div className="btn-container">
        <button className="secondary normal" onClick={triggerEmptySearch}>
          Clear Search
        </button>
        <Link to="/#contact-me" className="link-btn primary">
          Contact Me
        </Link>
      </div>
    </EmptySearchStateStyles>
  );
}
