import { PortableText } from "@portabletext/react";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { RichText } from "./BlogRichText";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeroStyles = styled.section``;

export default function Hero({ data }: any) {
  const [linkedin, github, twitter] = data.socialLinks;

  return (
    <HeroStyles>
      <a href={github.link} className="icon-link">
        <Icon name={github.name} size="24" />
      </a>
      <a href={linkedin.link} className="icon-link">
        <Icon name={linkedin.name} size="24" />
      </a>
      <a href={twitter.link} className="icon-link">
        <Icon name={twitter.name} size="24" />
      </a>
      <h4>{data.greeting}</h4>
      <PortableText
        value={data._rawBody}
        // @ts-ignore
        components={RichText}
      />
      <Link to="/blog" className="outline-btn">
        Go To Blog
      </Link>
      <Link to="/projects" className="filled-btn">
        Go To Portfolio
      </Link>

      <GatsbyImage
        image={data.image.asset.gatsbyImageData}
        alt="Jeff working at his desk on his laptop"
      />
    </HeroStyles>
  );
}
