import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";
import Nav from "./Nav";
import "normalize.css";
import { Typography } from "../styles/Typography";

export default function Layout({ children }: any) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
