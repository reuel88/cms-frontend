import { client } from "@/libs/apollo-client";
import { QUERY_ALL_MENUS } from "@/data/menus";

export const mapMenuData = (menu = {}) => {
  const { node } = menu;
  const data = { ...node };

  data.menuItems = data.menuItems.edges.map(({ node }) => {
    return { ...node };
  });

  return data;
};

export const getAllMenus = async () => {
  const { data } = await client.query({
    query: QUERY_ALL_MENUS,
  });

  // menus
  return data.menus.edges.map(mapMenuData);
};
