import { client } from "@/libs/apollo-client";
import { QUERY_SITE_DATA } from "@/data/site";

export const decodeHtmlEntities = (text: string) => {
  const decoded = text;

  const entities = {
    "&amp;": "\u0026",
    "&quot;": "\u0022",
    "&#039;": "\u0027",
  };

  return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
};

export const getSiteData = async () => {
  const { data: siteData } = await client.query({
    query: QUERY_SITE_DATA,
  });

  const { generalSettings } = siteData || {};

  // metadata
  return {
    ...generalSettings,
    title: decodeHtmlEntities(generalSettings.title || ""),
  };
};
