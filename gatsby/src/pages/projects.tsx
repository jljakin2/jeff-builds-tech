import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import FullProjectCard from "../components/FullProjectCard";
import Icon from "../components/Icon";
import Tag from "../components/Tag";

const ProjectsPageStyles = styled.section`
  display: grid;
  gap: 2.5rem;

  padding: 0 var(--gutter) 4rem var(--gutter);

  .projects-header {
    text-align: center;

    h5 {
      color: var(--lightText);
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0.5px;
      font-weight: 400;
    }
  }

  .search-form-container {
    position: relative;

    .search-bar {
      background: var(--white);
      border: 1px solid var(--inputBorder);
      border-radius: var(--radius);
      font-size: 0.875rem;
      line-height: 1.1875rem;
      letter-spacing: -0.25px;

      width: 100%;
      padding: 1rem 1rem 1rem 2.75rem;

      &::placeholder {
        color: var(--veryLightText);
      }
    }

    svg {
      fill: transparent;
      stroke: var(--lightText);

      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
  }
`;

export default function ProjectsPage({ data }: any) {
  const projects = data.projects.nodes;
  const tags = data.tags.nodes;

  return (
    <ProjectsPageStyles>
      <div className="projects-header">
        <h1>Projects</h1>
        <h5>
          Here are a collection of projects I built. There is a Github link and
          a Live link for each project so you can explor them further.
        </h5>
      </div>

      <form className="search-form-container">
        <Icon name="Search" size="18" />
        <input
          type="text"
          placeholder="Search for a project, language, or technology"
          className="search-bar"
        />
      </form>

      <div className="tags-container">
        {tags.map((tag: any) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </div>

      <div className="projects-container">
        {projects.map((project: any) => {
          return (
            <Link to={`/project/${project.slug.current}`} key={project.id}>
              <FullProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </ProjectsPageStyles>
  );
}

export const query = graphql`
  query GetTaggedProjects {
    projects: allSanityProject {
      nodes {
        name
        slug {
          current
        }
        liveLink
        githubLink
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
        excerpt
      }
    }

    tags: allSanityTag {
      nodes {
        id
        name
        slug {
          current
        }
      }
    }
  }
`;
