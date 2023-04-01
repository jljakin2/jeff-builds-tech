import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { estimateReadingTime } from "../utils/estimateReadingTime";
import { formatDate } from "../utils/formatDate";

const BlogCardStyles = styled.div``;

export default function BlogCard({ post }: any) {
  const formattedDate = formatDate(post.realCreatedDate || post._createdAt);

  return (
    <BlogCardStyles>
      <div className="image-container">
        <GatsbyImage image={post.featuredImage.asset.gatsbyImageData} alt="" />
      </div>
      <div className="content-container">
        <div className="content-header">
          <p>{formattedDate}</p>
          <p>{estimateReadingTime(post)}</p>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt} min</p>
      </div>
    </BlogCardStyles>
  );
}
