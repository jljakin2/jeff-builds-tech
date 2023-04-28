import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 700px)",
  md: "(max-width: 1000px)",
  l: "(max-width: 1900px)",
  portrait: "(orientation: portrait)",
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jeff Builds Tech`,
    siteUrl: `https://www.jeffbuildstech.com`,
    description: "Portfolio and blog for Full-Stack Developer Jeff Jakinovich.",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // loading in google fonts so you can just use the name of the font in the font stack
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Roboto",
            file: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
          },
        ],
      },
    },
    // connect to sanity headless cms
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

export default config;
