import SectionHeader from "@/components/section-header";

interface ArchivePageProps {}

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function ArchivePage({}: ArchivePageProps) {
  return (
    <div className="space-y-16">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 md:mx-0 md:max-w-none md:grid-cols-2">
        <SectionHeader
          title="August, 2023"
          level={2}
          className="col-span-1 ml-0 md:col-span-2"
        />

        {posts.map((post) => (
          <div key={post.id}>
            <article className="flex gap-x-4 py-5">
              <img
                className=" h-12 w-12 rounded-xl bg-gray-100 object-cover "
                src={post.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {post.title}
                  </p>
                  <p className="flex-none text-xs text-gray-600">
                    <time dateTime={post.datetime}>{post.date}</time>
                  </p>
                </div>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 md:mx-0 md:max-w-none md:grid-cols-2">
        <SectionHeader
          title="August, 2023"
          level={2}
          className="col-span-1 ml-0 md:col-span-2"
        />
        {[posts[0], posts[1]].map((post) => (
          <div key={post.id}>
            <article className="flex gap-x-4 py-5">
              <img
                className=" h-12 w-12 rounded-xl bg-gray-100 object-cover "
                src={post.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {post.title}
                  </p>
                  <p className="flex-none text-xs text-gray-600">
                    <time dateTime={post.datetime}>{post.date}</time>
                  </p>
                </div>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 md:mx-0 md:max-w-none md:grid-cols-2">
        <SectionHeader
          title="August, 2023"
          level={2}
          className="col-span-1 ml-0 md:col-span-2"
        />
        {[...posts, ...posts].map((post) => (
          <div key={post.id}>
            <article className="flex gap-x-4 py-5">
              <img
                className=" h-12 w-12 rounded-xl bg-gray-100 object-cover "
                src={post.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {post.title}
                  </p>
                  <p className="flex-none text-xs text-gray-600">
                    <time dateTime={post.datetime}>{post.date}</time>
                  </p>
                </div>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
