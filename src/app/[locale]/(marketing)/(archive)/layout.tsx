import { ReactNode } from "react";
import SiteArchiveLayout from "@/components/site-archive-layout";

interface ArchiveLayoutProps {
  children: ReactNode;
}

export default function ArchiveLayout({ children }: ArchiveLayoutProps) {
  return <SiteArchiveLayout>{children}</SiteArchiveLayout>;
}
