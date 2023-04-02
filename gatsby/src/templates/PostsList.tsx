import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";

const CategoryHomePageStyles = styled.section`
  padding: 0 var(--gutter) 4rem var(--gutter);

  .category-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }
`;

export default function PostsList({ data }: any) {
  const posts = data.posts.nodes;

  return (
    <CategoryHomePageStyles>
      <div className="category-container">
        {posts.map((post: any) => {
          return (
            <Link to={`/blog/post/${post.slug.current}`}>
              <BlogCard key={post.id} post={post} />
            </Link>
          );
        })}
      </div>
    </CategoryHomePageStyles>
  );
}

export const query = graphql`
  query GetSingleCategoryPage($slug: String) {
    posts: allSanityPost(
      filter: { category: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawBody
        featured
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
        excerpt
        author {
          id
          name
          slug {
            current
          }
          profileImage {
            asset {
              gatsbyImageData
            }
          }
          bio
        }
      }
    }
  }
`;
