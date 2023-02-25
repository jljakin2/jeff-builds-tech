import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

const BlogCategorySlideshowStyles = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  row-gap: 2rem;

  overflow: hidden;

  .categories-container {
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
    text-align: left;

    .item {
      border: 1px solid var(--white);
      border-radius: 1rem;
      cursor: pointer;

      padding: 0.5rem 0.75rem;

      &.current {
        background: var(--white);
        color: var(--primary-500);
        border: 1px solid var(--white);
      }
    }
  }

  .slideshow-container {
    /* width: 120%; */
  }

  .btn {
    background: var(--error);
    color: var(--white);
    border-radius: 1rem;
    cursor: pointer;

    align-self: center;

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
          category {
            name
            slug {
              current
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

  console.log({ posts, categories });

  const [activeIdx, setActiveIdx] = useState("0");

  function handleSelection(e: any) {
    setActiveIdx(e.target.id);
  }

  return (
    <BlogCategorySlideshowStyles>
      <ul className="categories-container">
        {categories.nodes.map((category: any, idx: string) => (
          <li
            key={category.id}
            id={idx}
            className={`item ${activeIdx == idx ? "current" : ""}`}
            onClick={handleSelection}>
            {category.name}
          </li>
        ))}
      </ul>

      <div className="slideshow-container">
        {categories.nodes.map((category: any) => (
          <ul className="category-carousel-container">
            {posts.nodes
              .filter((post: any) => {
                const foundCategory = post.category.find(
                  (item: any) =>
                    item.slug.current === category.name.toLowerCase()
                );
                return !!foundCategory;
              })
              .map((post: any) => (
                <li>{post.title}</li>
              ))}
          </ul>
        ))}
      </div>

      <Link to="/blog" className="btn">
        See all posts 👀
      </Link>
    </BlogCategorySlideshowStyles>
  );
}
