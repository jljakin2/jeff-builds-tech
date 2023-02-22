import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

const BlogCategorySlideshowStyles = styled.div`
  border: 1px solid red;

  .categories-container {
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;

    .item {
      cursor: pointer;

      &.current {
        background: var(--white);
        color: var(--primary-500);
        border-radius: 1rem;

        padding: 0.5rem 0.75rem;
      }
    }
  }

  .slideshow-container {
    width: 100%;
  }

  .btn {
    background: var(--error);
    color: var(--white);
    border-radius: 1rem;
    cursor: pointer;

    padding: 0.5rem 0.75rem;

    transition: all 0.2s ease-in;

    &:hover {
      background: rgba(247, 122, 135, 0.9);
    }
  }
`;

export default function BlogCategorySlideshow() {
  const { posts, categories } = useStaticQuery(graphql`
    query GetFeaturedPostsAndCategories {
      posts: allSanityPost(filter: { featured: { eq: true } }) {
        nodes {
          id
          title
          featured
          excerpt
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          slug {
            current
          }
        }
      }

      categories: allSanityCategory(filter: { featured: { eq: true } }) {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <BlogCategorySlideshowStyles>
      <ul className="categories-container">
        {categories.nodes.map((category: any) => (
          <li
            key={category.id}
            id={category.name.toLowerCase()}
            className="item current">
            {category.name}
          </li>
        ))}
      </ul>
      <div className="slideshow-container">
        <ul className="collection">
          {posts.nodes.map((post: any) => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div>
      <Link to="/blog" className="btn">
        See all posts 👀
      </Link>
    </BlogCategorySlideshowStyles>
  );
}
