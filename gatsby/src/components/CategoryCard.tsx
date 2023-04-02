import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const CategoryCardStyles = styled.div`
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  position: relative;

  width: 100%;
  height: 7rem;

  .gatsby-image-wrapper {
    border-radius: var(--radius);
    filter: brightness(50%);

    width: 100%;
    height: 100%;
  }

  .text-container {
    color: var(--white);

    position: absolute;
    bottom: 1rem;
    left: 1rem;

    width: 100%;

    z-index: 1000;
  }
`;

export default function CategoryCard({ category }: any) {
  return (
    <CategoryCardStyles>
      <GatsbyImage image={category.image.asset.gatsbyImageData} alt="" />
      <div className="text-container">
        <h5>{category.name}</h5>
        <p>{category.description}</p>
      </div>
    </CategoryCardStyles>
  );
}
