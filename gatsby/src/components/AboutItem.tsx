import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const AboutItemStyles = styled.div``;

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
