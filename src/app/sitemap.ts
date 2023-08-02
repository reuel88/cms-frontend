import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  //TODO: get all pages and post

  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
    },
  ];
}
