import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { ModeProvider } from "@/contexts/mode-context";
import { SiteProvider } from "@/contexts/site-context";
import { languageCodes } from "@/constants/locales";
import { getAllMenus } from "@/libs/menus";
import { getSiteData } from "@/libs/site";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

const inter = Inter({ subsets: ["latin"] });

async function getMessages(locale: string) {
  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const dir = isRtlLang(locale) ? "rtl" : "ltr";
    return {
      messages,
      dir,
    };
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return languageCodes.map((locale) => ({
    locale,
  }));
}

// TODO: finish manifest file
export async function generateMetadata() {
  const { title, description } = await getSiteData();

  return {
    title,
    description,
    manifest: "/manifest.json",
    themeColor: "#FFFFFF",
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const { messages, dir } = await getMessages(locale);

  const siteData = await getSiteData();

  const menusData = await getAllMenus();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={inter.className}>
        <SiteProvider metadata={siteData} menus={menusData}>
          <ModeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ModeProvider>
        </SiteProvider>
      </body>
    </html>
  );
}
