import { PortableText } from "@portabletext/react";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { NormalRichText } from "./NormalRichText";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import SocialBtn from "./SocialBtn";
import { media } from "../utils/mediaQueries";
//@ts-expect-error
import build from "../assets/images/build_squiggle.svg";
//@ts-expect-error
import write from "../assets/images/write_squiggle.svg";

const HeroStyles = styled.section`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-areas:
    "social"
    "greeting"
    "image"
    "body"
    "button";
  row-gap: 1rem;
  justify-items: center;
  align-items: center;
  text-align: center;

  min-height: 100svh;

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
    display: flex;
    column-gap: 1.5rem;
  }

  .greeting-container {
    grid-area: greeting;
  }

  .body-container {
    grid-area: body;

    h1,
    h4 {
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
      top: 20px;
      left: 0;

      ${media.laptop} {
        top: 24px;
        left: 16px;
      }
    }

    .unknown__pt__mark__highlight:last-of-type::after {
      content: url(${write});
      position: absolute;
      top: 20px;
      left: 12px;

      ${media.laptop} {
        top: 24px;
        left: 16px;
      }
    }
  }

  .button-container {
    grid-area: button;

    display: flex;
    align-items: center;
    column-gap: 1rem;

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

export default function Hero({ data }: any) {
  const [linkedin, github, twitter] = data.socialLinks;

  return (
    <HeroStyles>
      <div className="social-links-container">
        <SocialBtn link={github.link}>
          <Icon name={github.name} size="20" />
        </SocialBtn>
        <SocialBtn link={linkedin.link}>
          <Icon name={linkedin.name} size="20" />
        </SocialBtn>
        <SocialBtn link={twitter.link}>
          <Icon name={twitter.name} size="20" />
        </SocialBtn>
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
