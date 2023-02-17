import { PortableText } from "@portabletext/react";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { NormalRichText } from "./NormalRichText";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeroStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Hero({ data }: any) {
  const [linkedin, github, twitter] = data.socialLinks;

  return (
    <HeroStyles>
      <div className="social-links">
        <a href={github.link} className="icon-link">
          <Icon name={github.name} size="24" />
        </a>
        <a href={linkedin.link} className="icon-link">
          <Icon name={linkedin.name} size="24" />
        </a>
        <a href={twitter.link} className="icon-link">
          <Icon name={twitter.name} size="24" />
        </a>
      </div>

      <div className="text-container">
        <h4>{data.greeting}</h4>
        <PortableText
          value={data._rawBody}
          // @ts-ignore
          components={NormalRichText}
        />
      </div>

      <div className="button-container">
        <Link to="/blog" className="outline-btn">
          Go To Blog
        </Link>
        <Link to="/projects" className="filled-btn">
          Go To Portfolio
        </Link>
      </div>

      <div className="hero-container">
        <GatsbyImage
          image={data.image.asset.gatsbyImageData}
          alt="Jeff working at his desk on his laptop"
        />
      </div>
    </HeroStyles>
  );
}
