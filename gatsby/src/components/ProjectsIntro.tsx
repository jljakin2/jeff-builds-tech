import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const BlogIntroStyles = styled.section``;

export default function ProjectsIntro() {
  return (
    <BlogIntroStyles>
      <h1>I love to build.</h1>
      <Link to="/projects">See all projects 👀</Link>
    </BlogIntroStyles>
  );
}
