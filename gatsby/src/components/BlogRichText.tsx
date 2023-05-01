import React from "react";
import Image from "gatsby";
import Link from "gatsby";
import { CodeBlock } from "./CodeBlock";
import YoutubeEmbed from "./YouTubeEmbed";
import PortableTextImage from "./PortableTextImage";

export const BlogRichText = {
  types: {
    image: ({ node }: any) => <PortableTextImage node={node} />,
    code: (props: any) => {
      return <CodeBlock {...props} />;
    },
    youtube: ({ node }: any) => <YoutubeEmbed url={node.url} />,
    break: (props: any) => {
      console.log("break props:", props);
      const { style } = props.value;
      if (style === "sectionBreak") {
        return <hr className="section-break" />;
      } else {
        // add more styles as needed. see break.js in sanity schemas
        return;
      }
    },
  },

  block: {
    h1: ({ children }: any) => {
      return <h1>{children}</h1>;
    },
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    normal: ({ children }: any) => {
      return <p>{children}</p>;
    },
    softBreak: () => <br />,
  },
  blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <a href={value.href} rel={rel} target="_blank">
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }: any) => {
      return (
        // @ts-ignore
        <Link to={value.href}>{children}</Link>
      );
    },
  },
};
