import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const BlogCategorySlideshowStyles = styled.div``;

export default function BlogCategorySlideshow({ categories }: any) {
  const { posts } = useStaticQuery(graphql`
    query GetPosts {
      posts: allSanityPost {
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
    }
  `);

  return (
    <BlogCategorySlideshowStyles>
      <ul className="categories">
        {categories.map((category: any) => (
          <li>{category.name}</li>
        ))}
      </ul>
      <div className="slideshow-container">
        <ul className="collection">
          {posts.nodes.map((post: any) => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div>
      <Link to="/blog">See all posts 👀</Link>
    </BlogCategorySlideshowStyles>
  );
}
