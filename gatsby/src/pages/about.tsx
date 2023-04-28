import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import AboutItem from "../components/AboutItem";
import RoleItem from "../components/RoleItem";
import SkillBarItem from "../components/SkillBarItem";
import SEO from "../components/SEO";
import { media } from "../utils/mediaQueries";

const AboutPageStyles = styled.section`
  padding-bottom: 8rem;

  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8rem;

    padding: 0 var(--gutter) 2rem var(--gutter);

    ${media.tablet} {
      padding: 0 calc(var(--gutter) + 5rem) 2rem calc(var(--gutter) + 5rem);
    }

    h1 {
      font-size: 2rem
      margin-bottom: -4rem;

      ${media.tablet} {
        font-size: 1.75rem;

        margin-bottom: -2rem;
      }


    }
  }

  .skills-container {
    background: var(--bg);

    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    padding: 2rem var(--gutter);

    .skills-header {
      display: flex;
      flex-direction: column;

      margin-bottom: 2rem;

      h1 {
        text-align: center;
      }
    }

    .skills-toggle {
      background: var(--white);
      box-shadow: var(--shadow);
      border-radius: var(--radius);

      display: flex;
      align-items: center;
      justify-content: space-between;
      align-self: center;

      & > * {
        cursor: pointer;

        flex-basis: 1;

        padding: 1rem;
      }

      & > *:first-child {
        border-radius: var(--radius) 0 0 var(--radius);
      }

      & > *:last-child {
        border-radius: 0 var(--radius) var(--radius) 0;
      }

      &--technical {
        background: ${({ isTech }: { isTech: boolean }) =>
          isTech ? "var(--primary-500)" : "transparent"};
        color: ${({ isTech }: { isTech: boolean }) =>
          isTech ? "var(--white)" : "var(--text)"};
      }

      &--leadership {
        background: ${({ isTech }: { isTech: boolean }) =>
          !isTech ? "var(--secondary-500)" : "transparent"};
        color: ${({ isTech }: { isTech: boolean }) =>
          !isTech ? "var(--white)" : "var(--text)"};
      }
    }
  }

  .roles-container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .skills-content {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    margin-top: 4rem;

    ${media.laptop} {
      flex-basis: 50%;

      margin-top: 0;
    }
  }

  .skill-bar-container {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    ${media.laptop} {
      flex-basis: 50%;
    }
  }

  .professional-container {
    ${media.laptop} {
      display: flex;
      column-gap: 3rem;

      width: 100%;
    }
  }
`;

export default function AboutPage({ data }: any) {
  const aboutItems = data.abouts.nodes;
  const roles = data.roles.nodes;
  const skills = data.skills.nodes;

  const [isTech, setIsTech] = React.useState(true);

  return (
    <>
      <SEO title="About" />

      <AboutPageStyles isTech={isTech}>
        <div className="about-container">
          <h1>About</h1>
          {aboutItems.map((item: any, idx: number) => {
            return <AboutItem key={item.id} aboutItem={item} idx={idx} />;
          })}
        </div>

        <div className="skills-container">
          <div className="skills-header">
            <h1>Skills</h1>
            <div className="skills-toggle">
              <div
                className="skills-toggle--technical"
                onClick={() => setIsTech(true)}>
                Technical
              </div>
              <div
                className="skills-toggle--leadership"
                onClick={() => setIsTech(false)}>
                Leadership
              </div>
            </div>
          </div>

          <div className="professional-container">
            <div className="skill-bar-container">
              {skills
                .filter((skill: any) => {
                  return skill.isTech === isTech;
                })
                .map((skill: any) => {
                  return <SkillBarItem key={skill.id} skillItem={skill} />;
                })}
            </div>

            <div className="skills-content">
              <div className="roles-container">
                {roles
                  .filter((role: any) => {
                    return role.isTech === isTech;
                  })
                  .map((role: any) => {
                    return <RoleItem key={role.id} roleItem={role} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
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
            gatsbyImageData(placeholder: BLURRED)
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
