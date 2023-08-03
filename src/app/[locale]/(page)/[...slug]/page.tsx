import WpBlockRender from "@/components/wp-block-render";
import { removeStartingTrailingSlash } from "@/libs/utils";
import { getAllPagesIndex, getPageByUri } from "@/libs/pages";

export async function generateStaticParams() {
  const pages = await getAllPagesIndex();

  return pages
    .filter((page) => page.uri !== "/")
    .map((page) => ({
      params: { slug: removeStartingTrailingSlash(page.uri).split("/") },
    }));
}

export default async function Slug({ params }) {
  const uri = `/${params.slug.join("/")}/`;

  const { blocks } = await getPageByUri(uri);

  return (
    <main>
      <WpBlockRender blocks={blocks} />
    </main>
  );
}
