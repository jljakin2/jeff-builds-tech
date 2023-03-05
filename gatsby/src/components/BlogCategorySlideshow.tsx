import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BlogCategorySlideshowStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  overflow: hidden;

  .categories-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
    text-align: left;

    .item {
      border-radius: 1rem;
      cursor: pointer;

      padding: 0.5rem 0.75rem;

      &.current {
        background: var(--white);
        color: var(--primary-500);
      }
    }
  }

  .category-carousel-container {
    opacity: 0.75;

    transition: all 0.3s ease-in;

    &.current {
      opacity: 1;
    }
  }

  .slideshow-container {
    display: flex;
    column-gap: 1.5rem;

    transform: translateX(
      calc(-70dvw * ${({ activeIdx }: { activeIdx: string }) => activeIdx})
    );
    transition: all 0.3s ease-in;

    .card-container {
      background: var(--white);
      border-radius: var(--radius);
      color: var(--text);
      text-align: left;

      display: grid;
      grid-template-columns: 5rem 1fr;

      width: 70dvw;

      .image-container {
        height: 100%;

        .gatsby-image-wrapper {
          border-radius: var(--radius) 0 0 var(--radius);

          height: 100%;
          object-fit: cover;
        }
      }

      .text-container {
        padding: 0.5rem;

        p {
          font-weight: 600;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
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

  const [activeIdx, setActiveIdx] = useState(0);
  const [numCategories, setNumCategories] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    setNumCategories(categories.nodes.length);
    resetTimeout();
    // @ts-ignore
    timeoutRef.current = setTimeout(
      () =>
        setActiveIdx(activeIdx =>
          activeIdx === numCategories - 1 ? 0 : activeIdx + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIdx]);

  function handleSelection(e: any) {
    setActiveIdx(parseInt(e.target.id));
  }

  return (
    // @ts-ignore
    <BlogCategorySlideshowStyles activeIdx={activeIdx}>
      <ul className="categories-container">
        {categories.nodes.map((category: any, idx: string) => (
          <li
            key={category.id}
            id={idx}
            className={`item ${activeIdx === parseInt(idx) ? "current" : ""}`}
            onClick={handleSelection}>
            {category.name}
          </li>
        ))}
      </ul>

      <div className="slideshow-container">
        {categories.nodes.map((category: any, idx: string) => (
          <ul
            className={`category-carousel-container ${
              parseInt(idx) == activeIdx ? "current" : ""
            }`}>
            {/* find all the posts where the category name and post category name are the same */}
            {posts.nodes
              .filter((post: any) => {
                const foundCategory = post.category.find(
                  (item: any) =>
                    item.slug.current === category.name.toLowerCase()
                );
                return !!foundCategory;
              })
              .map((post: any) => (
                <li className="card-container" key={post.id}>
                  <div className="image-container">
                    <GatsbyImage
                      image={post.featuredImage.asset.gatsbyImageData}
                      alt={`"${post.title}'s featured image"`}
                    />
                  </div>
                  <div className="text-container">
                    <p>{post.title}</p>
                  </div>
                </li>
              ))}
          </ul>
        ))}
      </div>

      <Link to="/blog" className="red-link-btn">
        See all posts 👀
      </Link>
    </BlogCategorySlideshowStyles>
  );
}
