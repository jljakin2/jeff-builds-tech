import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Logo from "./Logo";

const NavStyles = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div > svg {
    stroke: var(--text);
    cursor: pointer;
  }

  .sub-nav {
    background: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;

    height: 0;
    //@ts-ignore
    width: 100vw;
    visibility: hidden;

    transition: all 0.3s ease-in;
    z-index: 10000;

    &.open {
      height: 100vh;
      visibility: visible;
    }

    .close {
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
    }
  }

  .main-nav {
    display: flex;
    align-items: center;
    column-gap: 4rem;

    .contact-btn {
      padding: 0.5rem 1rem;
    }
  }

  .contact-btn {
    background: var(--secondary-500);
    color: var(--white);
  }
`;

export default function Nav({ isSmall }: { isSmall: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //@ts-expect-error
    <NavStyles isOpen={isOpen}>
      <Logo />
      {isSmall ? (
        <>
          <div onClick={() => setIsOpen(!isOpen)}>
            <Icon name="Hamburger" size="36" />
          </div>

          <ul className={isOpen ? "sub-nav open" : "sub-nav"}>
            <span className="close" onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </>
      ) : (
        <ul className="main-nav">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/#contact" className="contact-btn">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </NavStyles>
  );
}
