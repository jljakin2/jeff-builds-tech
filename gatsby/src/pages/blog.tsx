import { graphql } from "gatsby";
import * as React from "react";

export default function BlogHomePage({ data }: any) {
  const posts = data.posts.nodes;
  const categories = data.categories.nodes;

  return (
    <div>
      <h1>This is the blog home page</h1>
      {categories.map((category: any) => {
        return <p>{category.name}</p>;
      })}

      {posts.map((post: any) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
}

export const query = graphql`
  query GetBlogHomePage {
    posts: allSanityPost {
      nodes {
        id
        title
        slug {
          current
        }
        featured
        excerpt
        author {
          name
          slug {
            current
          }
          bio
          profileImage {
            asset {
              gatsbyImageData
            }
          }
        }
        featuredImage {
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
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
