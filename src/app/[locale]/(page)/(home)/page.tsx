import WpBlockRender from "@/components/wp-block-render";
import { getPageByUri } from "@/libs/pages";

export default async function Home() {
  const { blocks } = await getPageByUri("/home");

  return (
    <main>
      <WpBlockRender blocks={blocks} />
    </main>
  );
}
