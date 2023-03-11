import * as React from "react";
// import { RichText } from "../components/BlogRichText";
import styled from "styled-components";
import Hero from "../components/Hero";
import BlogIntro from "../components/BlogIntro";
import ProjectsIntro from "../components/ProjectsIntro";
import ContactSection from "../components/ContactSection";
// import { HomePageStyles } from "../styles/RichText";

const HomePageStyles = styled.section`
  svg {
    stroke: black;
    fill: transparent;
  }
`;

export default function HomePage() {
  // const components = {
  //   types: {
  //     // code: (props: any) => {
  //     //   console.log(props);
  //     //   return <p>Test</p>;
  //     // },
  //     // Any other custom types you have in your content
  //     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  //   },
  //   block: {
  //     h1: (props: any) => {
  //       console.log(props);
  //       return <h1>Test</h1>;
  //     },
  //   },
  // };

  return (
    <HomePageStyles>
      <Hero />
      <BlogIntro />
      <ProjectsIntro />
      <ContactSection />
    </HomePageStyles>
  );
}
