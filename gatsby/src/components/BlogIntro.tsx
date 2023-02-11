import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlogCategorySlideshow from "./BlogCategorySlideshow";

const BlogIntroStyles = styled.section``;

export default function BlogIntro() {
  return (
    <BlogIntroStyles>
      <div className="content-container">
        <h4>Writing</h4>
        <h1>Learn. Create. Write. Repeat.</h1>
        <h5>Here is some more context for what the blog is about</h5>
        <ul>
          {Array.from([1, 2, 3, 4]).map(category => (
            <li>{category}</li>
          ))}
        </ul>
        <Link to="/blog">See Blog</Link>
      </div>
      <BlogCategorySlideshow />
    </BlogIntroStyles>
  );
}
