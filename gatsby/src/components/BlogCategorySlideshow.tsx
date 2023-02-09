import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const BlogCategorySlideshowStyles = styled.div``;

export default function BlogCategorySlideshow() {
  return (
    <BlogCategorySlideshowStyles>
      <ul className="categories">
        {Array.from([1, 2, 3, 4]).map(category => (
          <li>{category}</li>
        ))}
      </ul>
      <div className="slideshow-container">
        <ul className="collection">
          {Array.from([1, 2, 3, 4]).map(category => (
            <li>{category}</li>
          ))}
        </ul>
      </div>
      <Link to="/blog">See all posts 👀</Link>
    </BlogCategorySlideshowStyles>
  );
}
