import RSS from "rss";
export async function GET() {
  const feed = new RSS({
    title: "Acme Blog",
    description: "Acme Blog",
    site_url: "https://acme.com",
    feed_url: "https://acme.com/feed.xml",
    copyright: `${new Date().getFullYear()} Acme`,
    pubDate: new Date(),
  });

  // TODO: get all posts
  // const posts = await getPosts();
  // posts.forEach(post => feed.item({
  //  title: post.title,
  //  description: post.description,
  //  url: `https://acme.com/posts/${post.slug}`,
  //  guid: post.id,
  //  date: post.date,
  //  author: post.author,
  //  categories: post.categories,
  //  }));

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
