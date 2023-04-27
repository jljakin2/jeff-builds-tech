import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SmoothScrollLink from "./SmoothScrollLink";
import { media } from "../utils/mediaQueries";

const FooterStyles = styled.footer`
  background: var(--primary-500);
  color: var(--white);

  text-align: center;

  padding: 2rem var(--gutter);

  .top {
    border-bottom: 1px solid var(--grey-400);

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;

    padding-bottom: 1.5rem;

    ${media.laptop} {
      flex-direction: row;
      align-items: flex-start;
      column-gap: 7rem;

      padding-bottom: 2.5rem;
    }

    .items-container {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;

      ${media.tablet} {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        width: 100%;
      }
    }
  }

  .link-header {
    font-weight: 600;
  }

  .link-item {
    a {
      color: var(--grey-400);
      line-height: 1.8rem;

      &:hover {
        color: var(--grey-500);
      }
    }
  }

  .bottom {
    padding-top: 1rem;

    p {
      color: var(--grey-500);
    }
  }
`;

export default function Footer() {
  const { data } = useStaticQuery(graphql`
    query GetLinksToSocials {
      data: allSanityContact {
        nodes {
          id
          socialLinks {
            id
            name
            link
          }
        }
      }
    }
  `);

  return (
    <FooterStyles>
      <div className="top">
        <Link to="/">
          <div>
            <Logo onDarkBackground />
          </div>
        </Link>
        <div className="items-container">
          <ul className="projects">
            <li className="link-header">Projects</li>
            <li className="link-item">
              <Link to="/projects">All Projects</Link>
            </li>
            <li className="link-item">
              <Link to="/projects">Featured</Link>
            </li>
          </ul>
          <ul className="blog">
            <li className="link-header">Blog</li>
            <li className="link-item">
              <Link to="/blog">Categories</Link>
            </li>
            <li className="link-item">
              <Link to="/blog">Coding</Link>
            </li>
            <li className="link-item">
              <Link to="">Creativity</Link>
            </li>
            <li className="link-item">
              <Link to="/blog">Leadership</Link>
            </li>
            <li className="link-item">
              <Link to="/blog">Learning</Link>
            </li>
          </ul>
          <ul className="extras">
            <li className="link-header">Extras</li>
            <li className="link-item">
              <Link to="/about">About Me</Link>
            </li>
            <li className="link-item">
              <SmoothScrollLink to="/#contact-me">Contact Me</SmoothScrollLink>
            </li>
          </ul>
          <ul className="social">
            <li className="link-header">Social</li>
            {data.nodes[0].socialLinks.map((item: any) => (
              <li className="link-item" key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>{`© ${new Date().getFullYear()} Jeff Jakinovich. All rights reserved.`}</p>
      </div>
    </FooterStyles>
  );
}
