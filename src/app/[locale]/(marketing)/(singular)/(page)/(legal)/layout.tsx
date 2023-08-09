"use client";
import SiteContainer from "@/components/site-container";
import SiteAside, {
  SiteAsideContainer,
  SiteAsideHeader,
} from "@/components/site-aside";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import { Disclosure } from "@headlessui/react";
import { ChevronRight } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  {
    name: "Teams",
    current: false,
    href: "#",
    children: [
      { name: "Engineering", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Customer Success", href: "#" },
    ],
  },
  {
    name: "Projects",
    current: false,
    href: "#",
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

interface LegalLayoutProps {
  children: ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <main>
      <SiteContainer className="pt-8 md:pt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-flow-col lg:grid-cols-3">
          <SiteAside>
            <SiteAsideContainer className="lg:block">
              <SiteAsideHeader title="Navigation" />
              <ul role="list" className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item?.children ? (
                      <a
                        href={item.href}
                        className={cn(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "block rounded-md py-2 pl-10 pr-2 text-sm font-semibold leading-6 text-gray-700",
                        )}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={cn(
                                item.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700",
                              )}
                            >
                              <ChevronRight
                                className={cn(
                                  open
                                    ? "rotate-90 text-gray-500"
                                    : "text-gray-400",
                                  "h-5 w-5 shrink-0",
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Disclosure.Button>
                            <Disclosure.Panel as="ul" className="mt-1 px-2">
                              {item?.children.map((subItem) => (
                                <li key={subItem.name}>
                                  <Disclosure.Button
                                    as="a"
                                    href={subItem.href}
                                    className={cn(
                                      subItem.current
                                        ? "bg-gray-50"
                                        : "hover:bg-gray-50",
                                      "block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700",
                                    )}
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </li>
                ))}
              </ul>
            </SiteAsideContainer>
          </SiteAside>

          <section className="prose col-span-1 flex flex-col lg:col-span-2 lg:col-start-2 lg:row-span-2">
            {children}
          </section>
        </div>
      </SiteContainer>
    </main>
  );
}
