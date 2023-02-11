import React from "react";
import Image from "gatsby";
import Link from "gatsby";
import styled from "styled-components";
import { CodeBlock } from "./CodeBlock";

export const NormalRichText = {
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
      return <h1 className="">{children}</h1>;
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
      return <p className="">{children}</p>;
    },
  },

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
