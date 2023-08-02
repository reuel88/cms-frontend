import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
