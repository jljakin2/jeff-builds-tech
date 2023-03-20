import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const AboutItemStyles = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;

  .about-text {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.0625rem;
      letter-spacing: 1.71429px;
    }

    .gatsby-image-wrapper {
      width: 80%;
    }
  }
`;

export default function AboutItem({ aboutItem }: any) {
  return (
    <AboutItemStyles>
      <GatsbyImage image={aboutItem.image.asset.gatsbyImageData} alt="" />
      <div className="about-text">
        <h3>{aboutItem.header}</h3>
        <p>{aboutItem.subheader}</p>
      </div>
    </AboutItemStyles>
  );
}
