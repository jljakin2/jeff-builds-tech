import * as React from "react";
import { graphql, Link } from "gatsby";
import { PortableText } from "@portabletext/react";
import { NormalRichText } from "../components/NormalRichText";
// import { RichText } from "../components/BlogRichText";
import styled from "styled-components";
import Icon from "../components/Icon";
import Hero from "../components/Hero";
import BlogIntro from "../components/BlogIntro";
import ProjectsIntro from "../components/ProjectsIntro";
import ContactForm from "../components/ContactForm/ContactForm";
// import { HomePageStyles } from "../styles/RichText";

const HomePageStyles = styled.section`
  svg {
    stroke: black;
    fill: transparent;
  }
`;

export default function HomePage({ data }: any) {
  const hero = data.heroes.nodes[0];
  const contact = data.contacts.nodes[0];
  const categories = data.categories.nodes;

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
      <Hero data={hero} />
      <BlogIntro data={categories} />
      <ProjectsIntro />
      <div className="contact-content-container">
        <h2>{contact.header}</h2>
        <PortableText value={contact._rawBody} components={NormalRichText} />
        <div className="socials-cont">
          {contact.socialLinks.map((item: any) => (
            <a href={item.link} target="_blank">
              <Icon key={item.id} name={item.name} size="48" />
            </a>
          ))}
        </div>
      </div>
      <ContactForm />
    </HomePageStyles>
  );
}

export const query = graphql`
  query GetHomePage {
    heroes: allSanityHero {
      nodes {
        id
        greeting
        _rawBody
        socialLinks {
          id
          name
          link
        }
        image {
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
      }
    }

    projects: allSanityProject {
      nodes {
        id
        name
        excerpt
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }

    contacts: allSanityContact {
      nodes {
        id
        header
        _rawBody
        socialLinks {
          id
          name
          link
        }
      }
    }
  }
`;
