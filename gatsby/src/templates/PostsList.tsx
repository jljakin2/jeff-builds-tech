import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const CategoryHomePageStyles = styled.section``;

export default function PostsList({ data }: any) {
  const posts = data.posts.nodes;

  return (
    <CategoryHomePageStyles>
      {posts.map((post: any) => {
        return (
          <Link to={`/blog/post/${post.slug.current}`}>
            <p>{post.title}</p>
          </Link>
        );
      })}
    </CategoryHomePageStyles>
  );
}

export const query = graphql`
  query GetSingleCategoryPage($slug: String) {
    posts: allSanityPost(
      filter: { category: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      nodes {
        id
        title
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
        author {
          id
          name
          slug {
            current
          }
          profileImage {
            asset {
              gatsbyImageData
            }
          }
          bio
        }
      }
    }
  }
`;
