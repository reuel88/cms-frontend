import { ReactNode } from "react";
import SiteSearchLayout from "@/components/site-archive-layout";

interface SearchLayoutProps {
  children: ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return <SiteSearchLayout>{children}</SiteSearchLayout>;
}
