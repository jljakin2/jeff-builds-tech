import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export default function PortableTextImage({ node }: any) {
  console.log({ node });
  const { asset, alt } = node;

  if (!asset || !asset.url) {
    return null;
  }

  return (
    <figure>
      {/* <GatsbyImage image={asset.gatsbyImageData} alt={alt} /> */}
      <img className="blog-img" src={asset.url} alt={alt} />
    </figure>
  );
}
