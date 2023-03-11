import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import SocialBtn from "./SocialBtn";

const SocialLinksStyles = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export default function SocialLinks({ socials }: any) {
  //   const { github, linkedin, twitter } = socials;

  return (
    <SocialLinksStyles>
      {socials.map((item: any) => (
        <SocialBtn link={item.link}>
          <Icon name={item.name} size="20" />
        </SocialBtn>
      ))}
      {/* //{" "}
      <SocialBtn link={github.link}>
        // <Icon name={github.name} size="20" />
        //{" "}
      </SocialBtn>
      //{" "}
      <SocialBtn link={linkedin.link}>
        // <Icon name={linkedin.name} size="20" />
        //{" "}
      </SocialBtn>
      //{" "}
      <SocialBtn link={twitter.link}>
        // <Icon name={twitter.name} size="20" />
        //{" "}
      </SocialBtn> */}
    </SocialLinksStyles>
  );
}
