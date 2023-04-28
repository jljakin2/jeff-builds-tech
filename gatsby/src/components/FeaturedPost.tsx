import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils/formatDate";
import { media } from "../utils/mediaQueries";
import { Link } from "gatsby";

const FeaturedPostStyles = styled.div`
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

export default function FeaturedPost({ post }: any) {
  const formattedDate = formatDate(post.realCreatedDate || post._createdAt);

  return (
    <FeaturedPostStyles>
      <Link to={`/blog/${post.slug.current}`}>
        <div className="image-container">
          <GatsbyImage
            image={post.featuredImage.asset.gatsbyImageData}
            alt=""
          />
        </div>
        <div className="content-container">
          <p>{formattedDate}</p>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </FeaturedPostStyles>
  );
}
