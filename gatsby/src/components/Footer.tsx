import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterStyles = styled.footer`
  background: var(--primary-500);
  color: var(--white);

  text-align: center;

  padding: 2rem;

  .top {
    border-bottom: 1px solid var(--grey-400);

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.75rem;

    padding-bottom: 1.5rem;
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
        <ul className="projects">
          <li className="link-header">Projects</li>
          <li className="link-item">
            <Link to="">All Projects</Link>
          </li>
          <li className="link-item">
            <Link to="">Featured</Link>
          </li>
        </ul>
        <ul className="blog">
          <li className="link-header">Blog</li>
          <li className="link-item">
            <Link to="">Categories</Link>
          </li>
          <li className="link-item">
            <Link to="">Coding</Link>
          </li>
          <li className="link-item">
            <Link to="">Creativity</Link>
          </li>
          <li className="link-item">
            <Link to="">Leadership</Link>
          </li>
          <li className="link-item">
            <Link to="">Learning</Link>
          </li>
        </ul>
        <ul className="extras">
          <li className="link-header">Extras</li>
          <li className="link-item">
            <Link to="">About Me</Link>
          </li>
          <li className="link-item">
            <Link to="">Contact Me</Link>
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
      <div className="bottom">
        <p>{`© ${new Date().getFullYear()} Jeff Jakinovich. All rights reserved.`}</p>
      </div>
    </FooterStyles>
  );
}
