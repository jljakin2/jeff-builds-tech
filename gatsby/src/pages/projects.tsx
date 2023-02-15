import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const ProjectsPageStyles = styled.section``;

export default function ProjectsPage({ data }: any) {
  const projects = data.projects.nodes;
  return (
    <ProjectsPageStyles>
      {projects.map((project: any) => {
        return (
          <Link to={`/project/${project.slug.current}`}>
            <p>{project.name}</p>
          </Link>
        );
      })}
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
  }
`;
