import React from "react";
import Image from "gatsby";
import Link from "gatsby";
import styled from "styled-components";
import { CodeBlock } from "./CodeBlock";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        //@ts-ignore
        <Image alt="" />
      );
    },
    code: (props: any) => {
      return <CodeBlock {...props} />;
    },
  },

  // list: {
  //   bullet: ({ children }: any) => (
  //     //@ts-ignore
  //     <ul className="">{children}</ul>
  //   ),
  //   number: ({ children }: any) => (
  //     //@ts-ignore
  //     <ol className="">{children}</ol>
  //   ),
  // },
  block: {
    h1: ({ children }: any) => {
      return <h1>{children}</h1>;
    },
    h2: ({ children }: any) => (
      //@ts-ignore
      <h2 className="">{children}</h2>
    ),
    h3: ({ children }: any) => (
      //@ts-ignore
      <h3 className="">{children}</h3>
    ),
    h4: ({ children }: any) => (
      //@ts-ignore
      <h4 className="">{children}</h4>
    ),
    normal: ({ children }: any) => {
      //@ts-ignore
      return <p className="test">{children}</p>;
    },
  },
  blockquote: ({ children }: any) => (
    //@ts-ignore
    <blockquote className="">{children}</blockquote>
  ),

  // marks: {
  //   link: ({ children, value }: any) => {
  //     const rel = !value.href.startsWith("/")
  //       ? "noreferrer noopener"
  //       : undefined;

  //     return (
  //       //@ts-ignore
  //       <Link href={value.href} rel={rel} className="">
  //         {children}
  //       </Link>
  //     );
  //   },
  // },
};
