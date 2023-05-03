import { graphql, Link } from "gatsby";
import * as React from "react";
import BlogCard from "../components/BlogCard";
import FeaturedBlogPost from "../components/FeaturedPost";
import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";
import { media } from "../utils/mediaQueries";

const BlogHomePageStyles = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  padding: 0 var(--gutter) 8rem var(--gutter);

  ${media.laptop} {
    row-gap: 6rem;
  }

  .posts-section {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .posts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      column-gap: 2rem;
      row-gap: 3rem;
    }
  }

  .categories-section {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .categories-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      row-gap: 2rem;

      max-width: 100%;

      ${media.tablet} {
        column-gap: 2rem;
      }
    }
  }
`;

export default function BlogHomePage({ data, pageContext }: any) {
  const posts = data.posts.nodes;
  const categories = data.categories.nodes;

  return (
    <>
      <SEO title="Blog" />

      <BlogHomePageStyles>
        {!pageContext.currentPage && (
          <div className="featured-container">
            <h1>Featured Post</h1>
            <FeaturedBlogPost />
          </div>
        )}

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

        <Pagination
          // @ts-expect-error
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.posts.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base="/blog"
        />

        <div className="categories-section">
          <h2>Categories</h2>
          <div className="categories-container">
            {categories.map((category: any) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          </div>
        </div>
      </BlogHomePageStyles>
    </>
  );
}

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 7) {
    posts: allSanityPost(
      sort: { realCreatedDate: DESC }
      limit: $pageSize
      skip: $skip
    ) {
      totalCount
      nodes {
        id
        title
        slug {
          current
        }
        realCreatedDate
        superFeatured
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
