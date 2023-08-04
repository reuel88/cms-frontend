import { v4 as uuid } from "uuid";
import { Block } from "@/components/wp-block-render";
import { QUERY_ALL_PAGES_INDEX, QUERY_PAGE_BY_URI } from "@/data/pages";
import { client } from "@/libs/apollo-client";

export const cleanAndTransformBlocks = (blocksJSON: unknown[]): Block[] => {
  if (!blocksJSON) return [];

  const blocks = JSON.parse(JSON.stringify(blockJSON));

  const assignIds = (b: Block[]) => {
    b.forEach((block) => {
      block.id = uuid();
      if (block.innerBlocks?.length) {
        assignIds(block.innerBlocks);
      }
    });
  };

  assignIds(blocks);

  return blocks;
};

export const getPageByUri = async (uri: string): Promise<Page> => {
  const { data } = await client.query({
    query: QUERY_PAGE_BY_URI,
    variables: {
      uri: uri,
    },
  });

  const page = { ...data.page, featuredImage: data.page?.featuredImage?.node };
  page.blocks = cleanAndTransformBlocks(data.page?.blocks);

  console.log(data);

  return page;
};

export const getAllPagesIndex = async () => {
  const { data } = await client.query({
    query: QUERY_ALL_PAGES_INDEX,
  });

  const transformPages = (pages) => {
    if (!pages?.edges) return null;

    return (
      [...pages.edges].map((page) => ({
        ...page.node,
        children: transformPages(page?.node?.children),
        parent: page?.node?.parent?.node || null,
      })) || null
    );
  };

  // pages
  return transformPages(data.pages);
};
