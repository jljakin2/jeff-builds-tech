import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import FullProjectCard from "../components/FullProjectCard";
import { FormStyles } from "../styles/FormStyles";

const ProjectsPageStyles = styled.section`
  padding: 0 var(--gutter) 4rem var(--gutter);

  .search-bar {
    border-radius: 8rem;
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
      <h1>Projects</h1>

      <FormStyles>
        <input
          type="text"
          placeholder="Search projects"
          className="search-bar"
        />
      </FormStyles>

      <div className="tags-container">
        {tags.map((tag: any) => (
          <p>{tag.name}</p>
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
