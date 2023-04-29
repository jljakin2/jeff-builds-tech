import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils/formatDate";
import { media } from "../utils/mediaQueries";
import { Link, graphql, useStaticQuery } from "gatsby";
import EstimatedTime from "./EstimatedTime";

const FeaturedPostStyles = styled.div`
  a {
    color: var(--text);

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    ${media.laptop} {
      flex-direction: row;
      column-gap: 2rem;
    }

    .content-container {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;

      ${media.laptop} {
        flex-basis: calc(40% - 1rem);
      }

      .content-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .image-container {
    ${media.laptop} {
      flex-basis: calc(60% - 1rem);
    }
    .gatsby-image-wrapper {
      border-radius: var(--radius);
    }
  }
`;

export default function FeaturedPost() {
  const { post } = useStaticQuery(graphql`
    query GetSuperFeatured {
      post: sanityPost(superFeatured: { eq: true }) {
        id
        title
        excerpt
        realCreatedDate
        _rawBody
        _createdAt
        featuredImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        slug {
          current
        }
      }
    }
  `);

  const formattedDate = formatDate(post.realCreatedDate || post._createdAt);

  return (
    <FeaturedPostStyles>
      <Link to={`/blog/post/${post.slug.current}`}>
        <div className="image-container">
          <GatsbyImage
            image={post.featuredImage.asset.gatsbyImageData}
            alt=""
          />
        </div>
        <div className="content-container">
          <div className="content-header">
            <p>{formattedDate}</p>
            <EstimatedTime post={post} />
          </div>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </FeaturedPostStyles>
  );
}
