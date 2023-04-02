import { PortableText } from "@portabletext/react";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { NormalRichText } from "./NormalRichText";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import SocialBtn from "./SocialBtn";
import { media } from "../utils/mediaQueries";
//@ts-expect-error
import build from "../assets/images/build_squiggle.svg";
//@ts-expect-error
import write from "../assets/images/write_squiggle.svg";
import SocialLinks from "./SocialLinks";

const HeroStyles = styled.section`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-areas:
    "social"
    "greeting"
    "image"
    "body"
    "button";
  row-gap: 1.5rem;
  justify-items: center;
  align-items: center;
  text-align: center;

  min-height: 100svh;
  padding: 2rem var(--gutter) 4rem var(--gutter);

  ${media.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "social image"
      "greeting image"
      "body image"
      "button image";
    column-gap: 2rem;
    row-gap: 0;
    text-align: left;
    justify-items: start;
  }

  .social-links-container {
    grid-area: social;
  }

  .greeting-container {
    grid-area: greeting;
  }

  .body-container {
    grid-area: body;

    h1,
    h4 {
      color: var(--white);

      margin: 0;
    }

    h1 {
      line-height: 4.25rem;
    }

    .unknown__pt__mark__highlight:first-of-type,
    .unknown__pt__mark__highlight:last-of-type {
      position: relative;
    }

    .unknown__pt__mark__highlight:first-of-type::after {
      content: url(${build});
      position: absolute;
      top: 14px;
      left: 0;

      ${media.laptop} {
        top: 18px;
        left: 16px;
      }
    }

    .unknown__pt__mark__highlight:last-of-type::after {
      content: url(${write});
      position: absolute;
      top: 14px;
      left: 12px;

      ${media.laptop} {
        top: 18px;
        left: 16px;
      }
    }
  }

  .button-container {
    grid-area: button;

    display: flex;
    align-items: center;
    column-gap: 1rem;

    margin-top: 2rem;

    .link-btn {
      padding: 1rem;
    }
  }

  .image-container {
    grid-area: image;

    ${media.laptop} {
      justify-self: end;
    }
  }
`;

export default function Hero() {
  const { heroes } = useStaticQuery(graphql`
    query GetHeroSection {
      heroes: allSanityHero {
        nodes {
          id
          greeting
          _rawBody
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
    }
  `);
  const data = heroes.nodes[0];

  return (
    <HeroStyles>
      <div className="social-content-container">
        <SocialLinks />
      </div>

      <div className="greeting-container">
        <h4>{data.greeting}</h4>
      </div>

      <div className="body-container">
        <PortableText
          value={data._rawBody}
          // @ts-ignore
          // components={NormalRichText}
        />
      </div>

      <div className="button-container">
        <Link to="/blog" className="link-btn outline">
          Go To Blog
        </Link>
        <Link to="/projects" className="link-btn primary">
          Go To Portfolio
        </Link>
      </div>

      <div className="image-container">
        <GatsbyImage
          image={data.image.asset.gatsbyImageData}
          alt="Jeff working at his desk on his laptop"
          objectFit="cover"
          loading="lazy"
          aria-placeholder="none"
        />
      </div>
    </HeroStyles>
  );
}
