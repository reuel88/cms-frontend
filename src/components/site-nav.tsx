import { FC, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDown, MousePointerClick, PieChart } from "lucide-react";

const navigation = [
  { name: "Invest", href: "#" },
  {
    name: "Super",
    href: "#",
    children: [
      {
        name: "Raiz Invest Super",
        description:
          "Get a better understanding where your traffic is coming from",
        href: "#",
        icon: PieChart,
      },
      {
        name: "SMSF",
        description: "Self Manage Super Fund",
        href: "#",
        icon: MousePointerClick,
      },
    ],
  },
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Raiz Rewards",
        description:
          "Get a better understanding where your traffic is coming from",
        href: "#",
        icon: PieChart,
      },
      {
        name: "Raiz Kids",
        description: "Self Manage Super Fund",
        href: "#",
        icon: MousePointerClick,
      },
      {
        name: "Raiz Property Fund",
        description: "Self Manage Super Fund",
        href: "#",
        icon: MousePointerClick,
      },
      {
        name: "Offsetter",
        description: "Self Manage Super Fund",
        href: "#",
        icon: MousePointerClick,
      },
    ],
  },
  {
    name: "Learn",
    href: "#",
    children: [
      {
        name: "Raiz Blog",
        description:
          "Get a better understanding where your traffic is coming from",
        href: "/post",
        icon: PieChart,
      },
      {
        name: "Money Basic",
        description: "Self Manage Super Fund",
        href: "/money-basics",
        icon: MousePointerClick,
      },
      {
        name: "Stories",
        description: "Self Manage Super Fund",
        href: "/stories",
        icon: MousePointerClick,
      },
    ],
  },
  { name: "Support", href: "#" },
];

interface SiteNavProps {}

const SiteNav: FC<SiteNavProps> = () => {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => {
        if (!item.children) {
          return (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          );
        }

        return (
          <Popover.Group key={item.name}>
            <Popover>
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                {item.name}
                <ChevronDown
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {item.children.map((item) => (
                      <div
                        key={item.name}
                        className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          {item.icon && (
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <a
                          href={item.href}
                          className="mt-6 block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        );
      })}
    </div>
  );
};

export default SiteNav;
