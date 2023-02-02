import { graphql } from "gatsby";
import * as React from "react";

export default function BlogHomePage({ data }: any) {
  console.log(data);
  return (
    <div>
      <p>This is the blog home page</p>
    </div>
  );
}

export const query = graphql`
  query GetBlogHomePage {
    posts: allSanityPost {
      totalCount
    }
  }
`;
