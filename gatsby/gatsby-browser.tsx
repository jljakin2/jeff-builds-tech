import React from "react";
import Layout from "./src/components/Layout";

// this file contains everything you want gatsby to handle once
// the server has pushed everything to the browser but the page is not hydrated yet

export function wrapPageElement({ element, props }: any) {
  return <Layout {...props}>{element}</Layout>;
}
