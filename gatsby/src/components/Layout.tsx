import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";
import Nav from "./Nav";
import "normalize.css";
import { Typography } from "../styles/Typography";
import { useMediaQuery } from "react-responsive";
import { media } from "../utils/mediaQueries";

export default function Layout({ children }: any) {
  const isSmall = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav isSmall={isSmall} />
      {children}
      <Footer />
    </div>
  );
}
