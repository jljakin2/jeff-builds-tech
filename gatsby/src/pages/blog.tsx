import { graphql, Link } from "gatsby";
import * as React from "react";
import BlogCard from "../components/BlogCard";
import FeaturedBlogPost from "../components/FeaturedPost";
import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import Pagination from "../components/Pagination";

const BlogHomePageStyles = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  padding: 0 var(--gutter) 4rem var(--gutter);

  .posts-section {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .posts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  }

  .categories-section {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .categories-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }
  }
`;

export default function BlogHomePage({ data }: any) {
  const posts = data.posts.nodes;
  const categories = data.categories.nodes;
  const featuredPost = posts.filter((post: any) => post.featured)[0];

  return (
    <BlogHomePageStyles>
      <div className="featured-container">
        <h1>Featured Post</h1>
        <FeaturedBlogPost post={featuredPost} />
      </div>

      <div className="posts-section">
        <h2>All Posts</h2>
        <div className="posts-container">
          {posts.map((post: any) => {
            return (
              <Link to={`/blog/post/${post.slug.current}`}>
                <BlogCard post={post} />
              </Link>
            );
          })}
        </div>
      </div>

      <Pagination />

      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-container">
          {categories.map((category: any) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        </div>
      </div>
    </BlogHomePageStyles>
  );
}

export const query = graphql`
  query GetBlogHomePage {
    posts: allSanityPost(sort: { realCreatedDate: DESC }) {
      nodes {
        id
        title
        slug {
          current
        }
        realCreatedDate
        featured
        excerpt
        _rawBody
        author {
          name
          slug {
            current
          }
          bio
          profileImage {
            asset {
              gatsbyImageData
            }
          }
        }
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }

    categories: allSanityCategory {
      nodes {
        id
        name
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
