import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm/ContactForm";
import Icon from "./Icon";
import { NormalRichText } from "../components/NormalRichText";
import SocialLinks from "./SocialLinks";
import { media } from "../utils/mediaQueries";

const ContactSectionStyles = styled.section`
  background: var(--white);

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  padding: 4rem var(--gutter);
  z-index: 100;

  ${media.laptop} {
    flex-direction: row;
    align-items: flex-start;
    row-gap: 0;
    column-gap: 2rem;

    padding-top: 8rem;
  }

  &::before {
    content: "";
    background: var(--bg);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    -webkit-clip-path: polygon(0 35%, 100% 20%, 100% 100%, 0 100%);
    clip-path: polygon(0 35%, 100% 20%, 100% 100%, 0 100%);

    z-index: -1;
  }

  .contact-content-container {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
  }
`;

export default function ContactSection() {
  const { contacts } = useStaticQuery(graphql`
    query GetContactSection {
      contacts: allSanityContact {
        nodes {
          id
          header
          _rawBody
          socialLinks {
            id
            name
            link
          }
        }
      }
    }
  `);

  const contact = contacts.nodes[0];

  return (
    <ContactSectionStyles id="contact-me">
      <div className="contact-content-container">
        <h2>{contact.header}</h2>
        <PortableText value={contact._rawBody} components={NormalRichText} />
        {/* @ts-expect-error */}
        <SocialLinks socials={contact.socialLinks} />
        {/* <div className="socials-cont">
          {contact.socialLinks.map((item: any) => (
            <a href={item.link} target="_blank">
              <Icon key={item.id} name={item.name} size="48" />
            </a>
          ))}
        </div> */}
      </div>
      <ContactForm />
    </ContactSectionStyles>
  );
}
