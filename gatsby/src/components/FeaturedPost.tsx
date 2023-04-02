import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils/formatDate";

const FeaturedPostStyles = styled.div`
  .gatsby-image-wrapper {
    border-radius: var(--radius);
  }
`;

export default function FeaturedPost({ post }: any) {
  const formattedDate = formatDate(post.realCreatedDate || post._createdAt);

  return (
    <FeaturedPostStyles>
      <div className="image-container">
        <GatsbyImage image={post.featuredImage.asset.gatsbyImageData} alt="" />
      </div>
      <div className="content-container">
        <p>{formattedDate}</p>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </FeaturedPostStyles>
  );
}
