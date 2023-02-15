import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const ProjectStyles = styled.article``;

export default function Project({ data }: any) {
  const project = data.project;

  return (
    <ProjectStyles>
      <h1>{project.name}</h1>
    </ProjectStyles>
  );
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      tags {
        id
        name
        slug {
          current
        }
      }
      liveLink
      githubLink
      featuredImage {
        asset {
          gatsbyImageData
        }
      }
      featured
      carouselImages {
        asset {
          id
          gatsbyImageData
        }
      }
      _rawBody
    }
  }
`;
