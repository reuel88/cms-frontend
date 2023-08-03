import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
