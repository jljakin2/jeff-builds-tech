import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer``;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="top">
        <div>Logo</div>
        <ul className="projects">
          <li className="link-header">Projects</li>
          <li className="link-item">All Projects</li>
          <li className="link-item">Featured</li>
        </ul>
        <ul className="blog">
          <li className="link-header">Blog</li>
          <li className="link-item">Categories</li>
          <li className="link-item">Coding</li>
          <li className="link-item">Creativity</li>
          <li className="link-item">Leadership</li>
          <li className="link-item">Learning</li>
        </ul>
        <ul className="extras">
          <li className="link-header">Extras</li>
          <li className="link-item">About Me</li>
          <li className="link-item">Contact Me</li>
        </ul>
        <ul className="social">
          <li className="link-header">Social</li>
          <li className="link-item">LinkedIn</li>
          <li className="link-item">Github</li>
          <li className="link-item">Twitter</li>
        </ul>
      </div>
      <div className="bottom">
        <p>{`© ${new Date().getFullYear()} Jeff Jakinovich. All rights reserved.`}</p>
      </div>
    </FooterStyles>
  );
}
