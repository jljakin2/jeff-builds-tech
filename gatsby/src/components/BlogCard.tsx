import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { estimateReadingTime } from "../utils/estimateReadingTime";
import { formatDate } from "../utils/formatDate";
import Icon from "./Icon";
import EstimatedTime from "./EstimatedTime";

const BlogCardStyles = styled.div`
  display: grid;
  row-gap: 0.5rem;

  .content-container {
    display: grid;
    row-gap: 0.5rem;
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .title {
    color: var(--text);
  }

  p,
  .excerpt {
    color: var(--lightText);
  }

  .gatsby-image-wrapper {
    border-radius: var(--radius);

    width: 100%;
    height: 13rem;
  }
`;

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
          <EstimatedTime post={post} />
        </div>
        <h4 className="title">{post.title}</h4>
        <p className="excerpt">{post.excerpt}</p>
      </div>
    </BlogCardStyles>
  );
}
