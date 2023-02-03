import Image from "gatsby";
import Link from "gatsby";
import styled from "styled-components";

export const RichText = {
  types: {
    span: ({ children }: any) => {
      //@ts-ignore
      return <p style={{ color: "red" }}>{children}</p>;
    },
    image: ({ value }: any) => {
      return (
        //@ts-ignore
        <Image alt="" />
      );
    },
    list: {
      bullet: ({ children }: any) => (
        //@ts-ignore
        <ul className="">{children}</ul>
      ),
      number: ({ children }: any) => (
        //@ts-ignore
        <ol className="">{children}</ol>
      ),
    },
    block: {
      //@ts-ignore
      h1: ({ children }: any) => <h1 className="">{children}</h1>,
      //@ts-ignore
      h2: ({ children }: any) => <h2 className="">{children}</h2>,
      //@ts-ignore
      h3: ({ children }: any) => <h3 className="">{children}</h3>,
      //@ts-ignore
      h4: ({ children }: any) => <h4 className="">{children}</h4>,
    },
    blockquote: ({ children }: any) => (
      //@ts-ignore
      <blockquote className="">{children}</blockquote>
    ),
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;

        return (
          //@ts-ignore
          <Link
            href={value.href}
            rel={rel}
            style={{ color: "red" }}
            className="">
            {children}
          </Link>
        );
      },
    },
  },
};
