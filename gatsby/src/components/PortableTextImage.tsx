import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PortableTextImage({ node }: any) {
  const { asset, alt, caption } = node;

  if (!asset || !asset.gatsbyImageData) {
    return null;
  }

  return (
    <figure>
      <GatsbyImage image={asset.gatsbyImageData} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
