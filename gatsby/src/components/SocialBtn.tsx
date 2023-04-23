import React from "react";
import styled from "styled-components";

interface ISocialBtnProps {
  link: string;
  children: any;
}

const SocialBtnStyles = styled.a`
  background: transparent;
  border: 1.25px solid var(--veryLightText);
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.25rem;
  height: 2.25rem;

  transition: all 0.2s ease-in;

  &:hover {
    border: 1.25px solid var(--primary-500);
  }

  svg {
    stroke: var(--veryLightText);
    /* fill: var(--grey-500); */
    fill: none;

    transition: all 0.2s ease-in;
  }

  &:hover {
    background: var(--primary-500);

    svg {
      stroke: none;
      fill: var(--white);
    }
  }
`;

export default function SocialBtn({ link, children }: ISocialBtnProps) {
  return <SocialBtnStyles href={link}>{children}</SocialBtnStyles>;
}
