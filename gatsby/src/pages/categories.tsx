import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const CategoryHomePageStyles = styled.section``;

export default function CategoriesPage({ data }: any) {
  const categories = data.categories.nodes;
  return (
    <CategoryHomePageStyles>
      {categories.map((cat: any) => {
        return (
          <Link to={`/categories/${cat.slug.current}`}>
            <h4>{cat.name}</h4>
            <p>{cat.description}</p>
          </Link>
        );
      })}
    </CategoryHomePageStyles>
  );
}

export const query = graphql`
  query GetBlogCategoryHomePage {
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
