import React from "react";
import styled from "styled-components";

interface ISocialBtnProps {
  link: string;
  children: any;
}

const SocialBtnStyles = styled.a`
  background: transparent;
  border: 1px solid var(--grey-500);
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.25rem;
  height: 2.25rem;

  transition: all 0.2s ease-in;

  &:hover {
    border: 1px solid var(--primary-500);
  }

  svg {
    stroke: var(--grey-500);
    fill: var(--grey-500);

    transition: all 0.2s ease-in;
  }

  &:hover {
    background: var(--primary-500);

    svg {
      stroke: var(--white);
      fill: var(--white);
    }
  }
`;

export default function SocialBtn({ link, children }: ISocialBtnProps) {
  return <SocialBtnStyles href={link}>{children}</SocialBtnStyles>;
}
