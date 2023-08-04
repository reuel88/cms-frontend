import { FC } from "react";
import SiteLogo from "@/components/site-logo";
import MobileSidebar from "@/components/mobile-sidebar";
import SiteMenu from "@/components/site-menu";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/locale-switcher";

const SiteHeader: FC = () => {
  return (
    <header className="relative isolate z-10 bg-secondary">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <SiteLogo />

        <MobileSidebar />

        <SiteMenu />

        <div className="hidden items-center gap-2 lg:flex lg:flex-1 lg:justify-end">
          <LocaleSwitcher />

          <ModeToggle />

          <Button asChild>
            <a href="#">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
