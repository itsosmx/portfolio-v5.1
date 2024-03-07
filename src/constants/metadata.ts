import { Metadata } from "next";
const title = "Software Engineer - Osama Hussein (OSMX)";
const description =
  "I am Osama Hussein (OSMX), a passionate and self-taught full stack developer dedicated to designing and developing dynamic websites and applications. Discover my unwavering love for the craft!";

const SiteMetadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    site: "OSMX",
    title,
    description,
    images: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osmx.me",
    title,
    description,
    images: "/images/logo.png",
  },
  appleWebApp: {
    title,
    statusBarStyle: "black-translucent",
  },
  keywords:
    "portfolio,osmx, react, react.js, javascript, developer, fullstack, website, web designer, web developer, app developer, react native, node, node.js, npm, backend, frontend, freelancer, osama, osama hussein, osmx, osmx tech, tech",
};

export default SiteMetadata;