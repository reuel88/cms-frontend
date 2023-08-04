import Footer from "@/components/footer";
import SiteHeader from "@/components/site-header";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <Footer />
    </>
  );
}
