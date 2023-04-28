import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { media } from "../utils/mediaQueries";
import Icon from "./Icon";
import { Link } from "gatsby";

const ProjectCardStyles = styled.div`
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  cursor: default;

  width: 100%;

  ${media.tablet} {
    width: 300px;
  }

  .image-container {
    cursor: pointer;
    .gatsby-image-wrapper {
      border-radius: var(--radius) var(--radius) 0 0;
    }
  }

  .text-container {
    color: var(--text);

    display: grid;
    row-gap: 0.5rem;

    padding: 1.5rem 1rem;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        color: var(--text);
        font-weight: 400;
        cursor: pointer;
      }

      .icon-set {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;

        svg {
          cursor: pointer;
          stroke: var(--veryLightText);
          fill: none;

          &:hover {
            stroke: var(--text);
          }
        }
      }
    }

    .excerpt {
      color: var(--lightText);
    }
  }
`;

export default function FullProjectCard({ project }: any) {
  return (
    <ProjectCardStyles>
      <Link to={`/project/${project.slug.current}`}>
        <div className="image-container">
          <GatsbyImage
            image={project.featuredImage.asset.gatsbyImageData}
            alt={`${project.name} screenshot`}
          />
        </div>
      </Link>
      <div className="text-container">
        <div className="header">
          <Link to={`/project/${project.slug.current}`}>
            <h6 className="name">{project.name}</h6>
          </Link>
          <div className="icon-set">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <Icon size="18" name="Github" />
            </a>
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <Icon size="18" name="Live" />
            </a>
          </div>
        </div>
        <p className="excerpt">{project.excerpt}</p>
      </div>
    </ProjectCardStyles>
  );
}
