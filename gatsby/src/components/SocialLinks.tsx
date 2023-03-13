import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import SocialBtn from "./SocialBtn";

const SocialLinksStyles = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export default function SocialLinks({ socials }: any) {
  return (
    <SocialLinksStyles>
      {socials.map((item: any) => (
        <SocialBtn link={item.link}>
          <Icon name={item.name} size="20" />
        </SocialBtn>
      ))}
    </SocialLinksStyles>
  );
}
