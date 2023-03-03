import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const ProjectCardStyles = styled.div`
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  width: 15rem;
  min-height: 16rem;

  .text-container {
    color: var(--text);

    display: grid;
    row-gap: 0.5rem;

    padding: 1.5rem 1rem;

    .excerpt {
      color: var(--lightText);
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
        <p className="excerpt">{project.excerpt}</p>
      </div>
    </ProjectCardStyles>
  );
}
