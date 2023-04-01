import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const PostStyles = styled.article`
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2.875rem;
    font-weight: 600;
  }
`;

export default function Post({ data }: any) {
  const post = data.post;

  return (
    <PostStyles>
      <h1>{post.title}</h1>
    </PostStyles>
  );
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      featuredImage {
        asset {
          gatsbyImageData
        }
      }
      featured
      category {
        name
      }
      _rawBody
      author {
        name
        slug {
          current
        }
        bio
      }
    }
  }
`;
