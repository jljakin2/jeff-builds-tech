import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import AboutItem from "../components/AboutItem";
import RoleItem from "../components/RoleItem";
import SkillBarItem from "../components/SkillBarItem";

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
          return <AboutItem key={item.id} aboutItem={item} />;
        })}
      </div>

      <div className="skills-container">
        <div className="skills-header">
          <h1>Skills</h1>
          <div className="skills-toggle">
            <div className="skills-toggle--technical" />
            <div className="skills-toggle--leadership" />
          </div>
        </div>

        <div className="skills-content">
          <div className="roles-container">
            {roles.map((role: any) => {
              return <RoleItem key={role.id} roleItem={role} />;
            })}
          </div>

          <div className="skill-bar-container">
            {skills.map((skill: any) => {
              return <SkillBarItem key={skill.id} skillItem={skill} />;
            })}
          </div>
        </div>
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
