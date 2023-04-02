import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import SocialBtn from "./SocialBtn";

const SocialLinksStyles = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export default function SocialLinks() {
  const { links } = useStaticQuery(graphql`
    query GetSocials {
      links: allSanityHero {
        nodes {
          socialLinks {
            id
            name
            link
          }
        }
      }
    }
  `);
  const socials = links.nodes[0].socialLinks;
  return (
    <SocialLinksStyles>
      {socials.map((item: any) => (
        <SocialBtn link={item.link} key={item.id}>
          <Icon name={item.name} size="20" />
        </SocialBtn>
      ))}
    </SocialLinksStyles>
  );
}
