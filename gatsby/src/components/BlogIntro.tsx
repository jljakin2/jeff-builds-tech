import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { getFeatured } from "../utils/getFeatured";
import BlogCategorySlideshow from "./BlogCategorySlideshow";
import Icon from "./Icon";

const BlogIntroStyles = styled.section`
  background: var(--primary-500);
  color: var(--white);

  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  ul > li {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .check-logo {
    background: var(--secondary-500);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem;

    svg {
      stroke: var(--white);
    }
  }

  .link-btn {
    color: var(--white);
    border: 1px solid var(--white);
    background: transparent;

    &:hover {
      color: var(--primary-500);
      background: var(--white);
    }
  }
`;

export default function BlogIntro({ data }: any) {
  return (
    <BlogIntroStyles>
      <div className="content-container">
        <h4>Writing</h4>
        <h1>Learn. Build. Write. Repeat.</h1>
        <h5>Here is some more context for what the blog is about</h5>
        <ul>
          {data.map((category: any) => (
            <li>
              <div className="check-logo">
                <Icon name="Check" size="20" />
              </div>
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
        <Link to="/blog" className="link-btn outline">
          See Blog
        </Link>
      </div>
      {/* only pass in the featured categories for the carousel */}
      <BlogCategorySlideshow categories={getFeatured(data)} />
    </BlogIntroStyles>
  );
}
