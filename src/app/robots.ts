import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/static/", "/api/"],
    },
    sitemap: "https://iptvgerman.de/sitemap.xml",
  };
}
