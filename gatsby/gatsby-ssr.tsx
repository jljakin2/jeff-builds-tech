import React from "react";
import Layout from "./src/components/Layout";

// this file contains everything you want gatsby to handle on the server

export function wrapPageElement({ element, props }: any) {
  return <Layout {...props}>{element}</Layout>;
}
