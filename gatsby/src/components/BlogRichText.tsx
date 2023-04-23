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
