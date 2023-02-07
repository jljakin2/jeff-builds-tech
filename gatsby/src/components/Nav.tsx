import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavStyles = styled.nav``;

export default function Nav() {
  return (
    <NavStyles>
      <div>logo</div>
      <ul>
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
    </NavStyles>
  );
}
