import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { media } from "../utils/mediaQueries";

interface ActiveIndexProps {
  activeIdx: number;
  numCategories: number;
}

const BlogCategorySlideshowStyles = styled.div<ActiveIndexProps>`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  overflow: hidden;
  padding: 0 var(--gutter);

  ${media.laptop} {
    flex-basis: 50%;

    margin: 0 var(--gutter) 0 0;
    padding: 0;
  }

  .categories-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 0.5rem;
    text-align: left;

    width: 100%;

    ${media.laptop} {
      flex-wrap: nowrap;
    }

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
    opacity: 0.5;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    transition: all 0.3s ease-in;

    &.current {
      opacity: 1;
    }
  }

  .slideshow-container {
    display: flex;
    column-gap: 1.5rem;

    transform: translateX(
      calc(
        ${({ activeIdx }: { activeIdx: number }) =>
          `calc((-70vw - 24px) * ${activeIdx + 1}) + 10vw`}
      )
    );
    transition: all 0.3s ease-in;

    ${media.laptop} {
      justify-content: flex-start;

      transform: translateX(
        calc(
          ${({ activeIdx }: { activeIdx: number }) =>
            `calc((-20vw - 24px) * ${activeIdx + 1} + 10vw + 24px)`}
        )
      );
    }

    ${media.desktop} {
      transform: translateX(
        calc(
          ${({ activeIdx }: { activeIdx: number }) =>
            `calc((-20vw - 24px) * ${activeIdx + 1} + 10vw)`}
        )
      );
    }

    .card-container {
      background: var(--white);
      border-radius: var(--radius);
      color: var(--text);
      text-align: left;

      display: grid;
      grid-template-columns: 5rem 1fr;
      flex: 1;

      width: 70vw;

      /* min-width: 250px; */

      ${media.laptop} {
        width: 20vw;
      }

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
              gatsbyImageData(placeholder: BLURRED)
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

  // array set up
  let mainPosts: any = [];
  // create the array of arrays that make up the featured posts we want to show for each category
  categories.nodes.map((category: any, idx: string) => {
    mainPosts = [
      ...mainPosts,
      [
        ...posts.nodes
          .filter((post: any) => {
            const foundCategory = post.category.find(
              (item: any) => item.slug.current === category.name.toLowerCase()
            );
            return !!foundCategory;
          })
          .slice(0, 3),
      ],
    ];
  });

  // create the final array we will show which pads the ends
  const finalPosts = [
    mainPosts[mainPosts.length - 1],
    ...mainPosts,
    mainPosts[0],
    mainPosts[1],
  ];

  // =============

  return (
    <BlogCategorySlideshowStyles
      activeIdx={activeIdx}
      numCategories={finalPosts.length}>
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
        {/* @ts-ignore */}
        {finalPosts.map((category: any, idx: string) => (
          <ul
            className={`category-carousel-container ${
              parseInt(idx) == activeIdx + 1 ? "current" : ""
            }`}>
            {category.map((post: any) => (
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
