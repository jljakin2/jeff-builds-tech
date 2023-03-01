import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const ProjectCardStyles = styled.div`
  color: var(--white);
  box-shadow: var(--shadow);
  border-radius: var(--border);

  width: 15rem;

  .text-container {
    color: var(--text);

    .name {
      font-weight: 600;
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
        <p className="name">{project.name}</p>
        <p className="excerpt">{project.excerpt}</p>
      </div>
    </ProjectCardStyles>
  );
}
