import * as React from "react";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import { RichText } from "../components/RichText";

export default function IndexPage({ data }: any) {
  console.table(data);
  const hero = data.heroes.nodes[0];

  return (
    <div>
      <h4>{hero.greeting}</h4>
      {/* @ts-ignore */}
      <PortableText
        value={hero._rawBody}
        // @ts-ignore
        components={RichText}
      />
    </div>
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
