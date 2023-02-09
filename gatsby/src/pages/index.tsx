import * as React from "react";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import { RichText } from "../components/BlogRichText";
import styled from "styled-components";
import Icon from "../components/Icon";
import Hero from "../components/Hero";
import BlogIntro from "../components/BlogIntro";
import ProjectsIntro from "../components/ProjectsIntro";
// import { HomePageStyles } from "../styles/RichText";

const HomePageStyles = styled.section`
  padding: 1rem;

  svg {
    stroke: black;
    fill: transparent;
  }
`;

export default function HomePage({ data }: any) {
  const hero = data.heroes.nodes[0];

  // const components = {
  //   types: {
  //     // code: (props: any) => {
  //     //   console.log(props);
  //     //   return <p>Test</p>;
  //     // },
  //     // Any other custom types you have in your content
  //     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  //   },
  //   block: {
  //     h1: (props: any) => {
  //       console.log(props);
  //       return <h1>Test</h1>;
  //     },
  //   },
  // };

  return (
    <HomePageStyles>
      <Hero data={hero} />
      <BlogIntro />
      <ProjectsIntro />
    </HomePageStyles>
  );
}

export const query = graphql`
  query GetHomePage {
    heroes: allSanityHero {
      nodes {
        id
        greeting
        _rawBody
        socialLinks {
          id
          name
          link
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }

    categories: allSanityCategory {
      nodes {
        id
        name
      }
    }

    posts: allSanityPost {
      nodes {
        id
        title
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
        category {
          id
          name
        }
      }
    }

    projects: allSanityProject {
      nodes {
        id
        name
        excerpt
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }

    contacts: allSanityContact {
      nodes {
        id
        header
        _rawBody
        socialLinks {
          id
          name
          link
        }
      }
    }
  }
`;
