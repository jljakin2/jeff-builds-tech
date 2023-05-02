import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { BlogRichText } from "../components/BlogRichText";
import { GatsbyImage } from "gatsby-plugin-image";
import { estimateReadingTime } from "../utils/estimateReadingTime";
import SocialLinks from "../components/SocialLinks";
import { BlogPostStyles } from "../styles/BlogPostStyles";
import SEO from "../components/SEO";
import { media } from "../utils/mediaQueries";
import { formatDate } from "../utils/formatDate";

const PostStyles = styled.article`
  font-family: inherit;

  width: 100%;
  margin: 0 auto;
  padding: 1rem var(--gutter) 4rem var(--gutter);

  ${media.tablet} {
    padding: 1rem var(--gutter) 8rem var(--gutter);
  }

  .title {
    font-size: 2.5rem;
    font-weight: 600;

    max-width: 700px;
    margin: 0 auto 2rem auto;

    ${media.tablet} {
      font-size: 2.875rem;
    }
  }

  .post-info-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    width: 100%;
    max-width: 700px;
    margin: 0 auto 2rem auto;
  }

  .gatsby-image-wrapper {
    border-radius: var(--radius);

    ${media.laptop} {
      height: 600px;
    }
  }

  .date {
    font-weight: 500;

    margin-bottom: -1rem;
  }
`;

export default function Post({ data }: any) {
  const post = data.post;
  console.log("post:", post._rawBody);
  const formattedDate = formatDate(post.realCreatedDate || post._createdAt);

  return (
    <>
      <SEO title={post.title} />

      <PostStyles>
        <h1 className="title">{post.title}</h1>
        <div className="post-info-container">
          <p className="date">{formattedDate}</p>
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
          {/* @ts-ignore */}
          <PortableText value={post._rawBody} components={BlogRichText} />
        </BlogPostStyles>
      </PostStyles>
    </>
  );
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      realCreatedDate
      _createdAt
      featuredImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      featured
      category {
        name
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
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
