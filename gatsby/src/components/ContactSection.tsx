import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm/ContactForm";
import Icon from "./Icon";
import { NormalRichText } from "../components/NormalRichText";
import SocialLinks from "./SocialLinks";

const ContactSectionStyles = styled.section`
  background: var(--bg);

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

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
    <ContactSectionStyles>
      <div className="contact-content-container">
        <h2>{contact.header}</h2>
        <PortableText value={contact._rawBody} components={NormalRichText} />
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
