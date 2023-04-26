import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlogCategorySlideshow from "./BlogCategorySlideshow";
import Icon from "./Icon";
import { media } from "../utils/mediaQueries";

const BlogIntroStyles = styled.section`
  background: var(--primary-500);
  color: var(--white);

  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  text-align: center;

  padding: 4rem 0;

  ${media.laptop} {
    flex-direction: row;
    align-items: center;
    text-align: left;
    column-gap: 2rem;
  }

  &::before {
    content: "";
    background: var(--primary-500);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 46rem;

    transform: translateY(-45rem);
    -webkit-clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
    z-index: -1;

    ${media.tablet} {
      -webkit-clip-path: polygon(0 47%, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 47%, 100% 0, 100% 100%, 0% 100%);
    }

    ${media.laptop} {
      -webkit-clip-path: polygon(0 97%, 205% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 97%, 205% 0, 100% 100%, 0% 100%);
    }
  }

  h4 {
    text-align: center;

    ${media.laptop} {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2.5rem;

    padding: 0 var(--gutter);

    ${media.laptop} {
      flex-basis: 50%;
      align-items: flex-start;
      row-gap: 0;

      padding: 0 0 0 var(--gutter);
    }
  }

  .cat-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 100%;
    row-gap: 1rem;
    column-gap: 1rem;

    ${media.laptop} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      width: 100%;
      margin: 2rem 0;
    }

    & > * {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
    }
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

export default function BlogIntro() {
  const { categories } = useStaticQuery(graphql`
    query GetSingleCategoryNames {
      categories: allSanityCategory {
        nodes {
          id
          name
        }
      }
    }
  `);
  const data = categories.nodes;

  return (
    <BlogIntroStyles>
      <div className="content-container">
        <h4>Writing</h4>
        <h1>Learn. Build. Write. Repeat.</h1>
        <h5>Here is some more context for what the blog is about</h5>
        <ul className="cat-container">
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
      <BlogCategorySlideshow />
    </BlogIntroStyles>
  );
}
