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

  padding: 1.5rem;

  .hamburger {
    stroke: var(--text);
    cursor: pointer;
  }

  .sub-nav {
    background: var(--white);
    font-size: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 5rem;
    position: absolute;
    top: 0;
    left: 0;

    height: 0;
    //@ts-ignore
    width: 100vw;
    visibility: hidden;

    transition: all 0.3s ease-in;
    z-index: 10000;

    a {
      color: var(--text);
      cursor: pointer;
    }

    &.open {
      height: 100vh;
      visibility: visible;
    }

    .close {
      font-size: 2rem;
      color: var(--lightText);

      position: absolute;
      top: 2rem;
      right: 2rem;
      cursor: pointer;
    }

    .contact-btn {
      color: var(--white);

      padding: 1rem 1.5rem;
    }
  }

  .main-nav {
    display: flex;
    align-items: center;
    column-gap: 4rem;

    a {
      color: var(--lightText);
    }

    li:not(:last-child) {
      a {
        color: var(--lightText);
        position: relative;

        transition: all 0.2s ease-in-out;

        &::after {
          content: "";
          background: var(--text);

          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          transition: width 0.2s ease-in-out;

          width: 0%;
          height: 2px;
        }

        &[aria-current="page"]::after {
          content: "";
          background: var(--text);

          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          transition: width 0.2s ease-in-out;

          width: 100%;
          height: 2px;
        }

        &:hover {
          color: var(--text);

          &::after {
            width: 100%;
          }
        }
      }
    }

    .contact-btn {
      color: var(--white);

      padding: 0.5rem 1rem;
    }
  }

  .contact-btn {
    background: var(--secondary-500);
    border-radius: var(--radius);
  }
`;

export default function Nav({ isSmall }: { isSmall: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //@ts-expect-error
    <NavStyles isOpen={isOpen}>
      <Link to="/">
        <div>
          <Logo />
        </div>
      </Link>
      {isSmall ? (
        <>
          <div onClick={() => setIsOpen(!isOpen)} className="hamburger">
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
              <Link to="/#contact" className="contact-btn">
                Contact
              </Link>
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
