import styled from "styled-components";

export const BlogPostStyles = styled.article`
  color: var(--text);

  max-width: 700px;
  margin: 64px auto 0 auto;

  h1,
  h2,
  h3,
  h4 {
    font-family: "Open Sans", --apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.875rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  p {
    font-family: "Open Sans", --apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  blockquote {
    border-left: 4px solid #dbdbdb;
    font-style: italic;
    margin: 1.5rem 0;
    padding-left: 20px;
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 24px;
  }

  li {
    font-family: "Open Sans", --apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
  }

  a {
    color: #006aff;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
