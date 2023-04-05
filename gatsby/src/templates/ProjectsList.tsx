import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import ProjectCard from "../components/SimpleProjectCard";

const ProjectsListStyles = styled.section`
  padding: 0 var(--gutter) 4rem var(--gutter);

  .tag-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }
`;

export default function ProjectsList({ data }: any) {
  const projects = data.projects.nodes;

  return (
    <ProjectsListStyles>
      <div className="tag-container">
        {projects.map((project: any) => {
          return (
            <Link to={`/project/${project.slug.current}`}>
              <ProjectCard key={project.id} project={project} />
            </Link>
          );
        })}
      </div>
    </ProjectsListStyles>
  );
}

export const query = graphql`
  query GetTagsPage($slug: String) {
    projects: allSanityProject(
      filter: { tags: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        featured
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
        excerpt
        githubLink
        liveLink
      }
    }
  }
`;
