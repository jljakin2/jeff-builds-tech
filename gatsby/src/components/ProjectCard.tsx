import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { media } from "../utils/mediaQueries";

const ProjectCardStyles = styled.div`
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  width: 100%;
  height: 10rem;

  ${media.tablet} {
    height: 14rem;
  }

  ${media.laptop} {
    height: 16rem;
  }

  ${media.desktop} {
    height: 19rem;
  }

  .image-container {
    .gatsby-image-wrapper {
      border-radius: var(--radius) var(--radius) 0 0;
    }
  }

  .text-container {
    color: var(--text);
    font-size: 0.85em;

    display: grid;
    row-gap: 0.5rem;

    padding: 1.5rem 1rem;

    .excerpt {
      color: var(--lightText);
      font-size: 0.75em;
    }
  }
`;

export default function ProjectCard({ project }: any) {
  return (
    <ProjectCardStyles>
      <div className="image-container">
        <GatsbyImage
          image={project.featuredImage.asset.gatsbyImageData}
          alt={`${project.name} screenshot`}
        />
      </div>
      <div className="text-container">
        <h6 className="name">{project.name}</h6>
        {/* <p className="excerpt">{project.excerpt}</p> */}
      </div>
    </ProjectCardStyles>
  );
}
