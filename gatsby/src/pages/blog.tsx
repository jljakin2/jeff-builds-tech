import { graphql, Link } from "gatsby";
import * as React from "react";
import BlogCard from "../components/BlogCard";
import FeaturedBlogPost from "../components/FeaturedPost";

export default function BlogHomePage({ data }: any) {
  const posts = data.posts.nodes;
  const categories = data.categories.nodes;
  const featuredPost = posts.filter((post: any) => post.featured)[0];

  return (
    <div>
      <h1>Blog</h1>

      <FeaturedBlogPost post={featuredPost} />

      {posts.map((post: any) => {
        return (
          <Link to={`/blog/post/${post.slug.current}`}>
            <BlogCard post={post} />
          </Link>
        );
      })}

      {categories.map((category: any) => {
        return <p>{category.name}</p>;
      })}
    </div>
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
