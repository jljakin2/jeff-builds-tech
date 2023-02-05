import * as React from "react";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import { RichText } from "../components/RichText";
import { HomePageStyles } from "../styles/RichText";

export default function HomePage({ data }: any) {
  const hero = data.heroes.nodes[0];
  console.table(hero._rawBody);

  // const components = {
  //   types: {
  //     code: (props: any) => {
  //       console.log(props);
  //       return <p>Test</p>;
  //     },
  //     // Any other custom types you have in your content
  //     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  //   },
  // };

  return (
    <HomePageStyles>
      <h4>{hero.greeting}</h4>
      {/* @ts-ignore */}
      <PortableText
        value={hero._rawBody}
        // @ts-ignore
        components={RichText}
      />
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
