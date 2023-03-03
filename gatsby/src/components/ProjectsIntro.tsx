import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const BlogIntroStyles = styled.section`
  overflow: hidden;
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

    width: 150%;
    transform: translateX(-50px);
  }
`;

export default function ProjectsIntro() {
  const { projects } = useStaticQuery(graphql`
    query GetProjectCarousel {
      projects: allSanityProject {
        nodes {
          id
          name
          slug {
            current
          }
          excerpt
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <BlogIntroStyles>
      <div className="projects-container">
        {projects.nodes.map((project: any) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      {/* <ProjectCard project={projects.nodes[0]} /> */}
      <h1>I love to build.</h1>
      <Link to="/projects">See all projects 👀</Link>
    </BlogIntroStyles>
  );
}
