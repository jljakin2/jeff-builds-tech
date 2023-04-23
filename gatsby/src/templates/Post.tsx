import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { BlogRichText } from "../components/BlogRichText";
import { GatsbyImage } from "gatsby-plugin-image";
import { estimateReadingTime } from "../utils/estimateReadingTime";
import SocialLinks from "../components/SocialLinks";
import { BlogPostStyles } from "../styles/BlogPostStyles";

const PostStyles = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: var(--gutter);

  h1 {
    font-size: 2.875rem;
    font-weight: 600;
  }

  .gatsby-image-wrapper {
    border-radius: var(--radius);
  }
`;

export default function Post({ data }: any) {
  const post = data.post;

  return (
    <PostStyles>
      <h1>{post.title}</h1>
      <div className="post-info-container">
        <p>
          Written by{" "}
          <span>
            {post.author.name} • {estimateReadingTime(post)} min
          </span>
        </p>
        <SocialLinks />
      </div>
      <GatsbyImage image={post.featuredImage.asset.gatsbyImageData} alt="" />
      <BlogPostStyles>
        <PortableText value={post._rawBody} components={BlogRichText} />
      </BlogPostStyles>
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
