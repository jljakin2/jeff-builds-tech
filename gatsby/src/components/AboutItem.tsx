import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { media } from "../utils/mediaQueries";

const AboutItemStyles = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;

  ${media.laptop} {
    text-align: left;

    flex-direction: row;
    align-items: flex-start;
    row-gap: 0;
    column-gap: 4rem;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    ${media.laptop} {
      order: ${({ idx }: { idx: number }) => (idx === 1 ? -1 : 0)};
    }

    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.0625rem;
      letter-spacing: 1.71429px;
    }
  }

  .gatsby-image-wrapper {
    width: 80%;

    ${media.laptop} {
      width: 100%;
    }
  }
`;

export default function AboutItem({
  aboutItem,
  idx,
}: {
  aboutItem: any;
  idx: number;
}) {
  return (
    // @ts-ignore
    <AboutItemStyles idx={idx}>
      <GatsbyImage image={aboutItem.image.asset.gatsbyImageData} alt="" />
      <div className="about-text">
        <h3>{aboutItem.header}</h3>
        <p>{aboutItem.subheader}</p>
      </div>
    </AboutItemStyles>
  );
}
