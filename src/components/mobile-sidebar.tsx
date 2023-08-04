import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTrigger,
} from "@/components/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/locale-switcher";
import ModeToggle from "@/components/mode-toggle";
import SiteLogo from "@/components/site-logo";

const MobileSidebar: FC = () => {
  return (
    <Sheet>
      <div className="flex lg:hidden">
        <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary/70">
          <span className="sr-only">Open main menu</span>
          <Menu />
        </SheetTrigger>
      </div>

      <SheetContent>
        <SheetHeader className="flex flex-row items-center justify-between">
          <SiteLogo />

          <SheetClose className="-m-2.5 rounded-md p-2.5 text-primary/70">
            <span className="sr-only">Close menu</span>
            <X />
          </SheetClose>
        </SheetHeader>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-primary/10">
            <div className="space-y-2 py-6">
              <Accordion type="single" collapsible className="-mx-3">
                <AccordionItem value="Product" className="border-none">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-primary/90 hover:bg-background/50 hover:no-underline">
                    Product
                  </AccordionTrigger>
                  <AccordionContent>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      Engagement
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      Security
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      Integrations
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      Watch demo
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      Contact sales
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary/90 hover:bg-background/50"
                    >
                      View all products
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <a
                href="#"
                className=" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary/90 hover:bg-background/50"
              >
                Features
              </a>
              <a
                href="#"
                className=" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary/90 hover:bg-background/50"
              >
                Marketplace
              </a>
              <a
                href="#"
                className=" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary/90 hover:bg-background/50"
              >
                Company
              </a>
            </div>

            <div className="flex items-center gap-2 py-6">
              <LocaleSwitcher />

              <ModeToggle />
            </div>

            <div className="space-y-2 py-6">
              <Button asChild>
                <a href="#" className="w-full">
                  Log in
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
