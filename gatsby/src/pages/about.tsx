import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const AboutPageStyles = styled.section``;

export default function AboutPage({ data }: any) {
  const aboutItems = data.abouts.nodes;
  const roles = data.roles.nodes;
  const skills = data.skills.nodes;

  return (
    <AboutPageStyles>
      <div className="about-container">
        <h1>About</h1>
        {aboutItems.map((item: any) => {
          return (
            <div className="about-item">
              <GatsbyImage image={item.image.asset.gatsbyImageData} alt="" />
              <div className="about-tex">
                <h3>{item.header}</h3>
                <p>{item.subheader}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-container">
        <h1>Skills</h1>
      </div>
    </AboutPageStyles>
  );
}

export const query = graphql`
  query GetAboutPage {
    abouts: allSanityAbout {
      nodes {
        id
        header
        subheader
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    roles: allSanityJobRole {
      nodes {
        id
        isTech
        title
        responsibilities
      }
    }
    skills: allSanitySkill {
      nodes {
        id
        isTech
        name
        level
        tag {
          name
        }
      }
    }
  }
`;
