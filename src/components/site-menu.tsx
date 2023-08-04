"use client";

import { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Fingerprint,
  LayoutDashboard,
  MousePointerClick,
  Phone,
  PieChart,
  PlayCircle,
  ToyBrick,
} from "lucide-react";

interface SiteMenuProps {}

const SiteMenu: FC<SiteMenuProps> = () => {
  return (
    <>
      <NavigationMenu.Root className="hidden lg:flex lg:gap-x-12">
        <ul className="hidden lg:flex lg:gap-x-12">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-x-1 px-2 py-1 text-sm font-semibold leading-6 text-primary/90">
              Product
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute inset-x-0 top-0 -z-10 bg-secondary pt-14 shadow-lg ring-1 ring-gray-900/5">
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-background/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background/50 group-hover:bg-secondary">
                    <PieChart className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-primary/90"
                  >
                    Analytics
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-primary/60">
                    Get a better understanding where your traffic is coming from
                  </p>
                </div>

                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-background/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background/50 group-hover:bg-secondary">
                    <MousePointerClick className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-primary/90"
                  >
                    Engagement
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-primary/60">
                    Speak directly to your customers with our engagement tool
                  </p>
                </div>

                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-background/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background/50 group-hover:bg-secondary">
                    <Fingerprint className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-primary/90"
                  >
                    Security
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-primary/60">
                    Your customers’ data will be safe and secure
                  </p>
                </div>

                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-background/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background/50 group-hover:bg-secondary">
                    <ToyBrick className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-primary/90"
                  >
                    Integrations
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-primary/60">
                    Your customers’ data will be safe and secure
                  </p>
                </div>
              </div>

              <div className="bg-background/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-primary/90 hover:bg-background"
                    >
                      <PlayCircle className="h-5 w-5 flex-none text-primary/40" />
                      Watch demo
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-primary/90 hover:bg-background"
                    >
                      <Phone className="h-5 w-5 flex-none text-primary/40" />
                      Contact sales
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-primary/90 hover:bg-background"
                    >
                      <LayoutDashboard className="h-5 w-5 flex-none text-primary/40" />
                      View all products
                    </a>
                  </div>
                </div>
              </div>
              {/*</div>*/}
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a
              href="#"
              className="flex items-center gap-x-1 px-2 py-1 text-sm font-semibold leading-6 text-primary/90"
            >
              Features
            </a>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a
              href="#"
              className="flex items-center gap-x-1 px-2 py-1 text-sm font-semibold leading-6 text-primary"
            >
              Marketplace
            </a>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a
              href="#"
              className="flex items-center gap-x-1 px-2 py-1 text-sm font-semibold leading-6 text-primary"
            >
              Company
            </a>
          </NavigationMenu.Item>
        </ul>
      </NavigationMenu.Root>
    </>
  );
};

export default SiteMenu;
