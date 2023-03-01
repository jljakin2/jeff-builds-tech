import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const BlogIntroStyles = styled.section``;

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
      <ProjectCard project={projects.nodes[0]} />
      <h1>I love to build.</h1>
      <Link to="/projects">See all projects 👀</Link>
    </BlogIntroStyles>
  );
}
