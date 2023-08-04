"use client";

import { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface SiteMenuProps {}

const SiteMenu: FC<SiteMenuProps> = () => {
  return (
    <>
      <NavigationMenu.Root className="hidden lg:flex lg:gap-x-12">
        <ul className="hidden lg:flex lg:gap-x-12">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-gray-900"
                  >
                    Analytics
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">
                    Get a better understanding where your traffic is coming from
                  </p>
                </div>
                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                      />
                    </svg>
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-gray-900"
                  >
                    Engagement
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">
                    Speak directly to your customers with our engagement tool
                  </p>
                </div>
                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-gray-900"
                  >
                    Security
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">
                    Your customers’ data will be safe and secure
                  </p>
                </div>
                <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <a
                    href="#"
                    className="mt-6 block font-semibold text-gray-900"
                  >
                    Integrations
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">
                    Your customers’ data will be safe and secure
                  </p>
                </div>
              </div>
              <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <svg
                        className="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch demo
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <svg
                        className="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contact sales
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <svg
                        className="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z"
                          clipRule="evenodd"
                        />
                      </svg>
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
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Features
            </a>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
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
