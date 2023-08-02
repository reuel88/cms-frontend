import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { ModeProvider } from "@/contexts/ModeContext";
import { languageCodes } from "@/constants/locales";

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
    const messages = (await import(`../../../messages/en.json`)).default;
    return {
      messages,
      dir: "ltr",
    };
  }
}

export async function generateStaticParams() {
  return languageCodes.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const { messages } = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const { messages, dir } = await getMessages(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={inter.className}>
        <ModeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ModeProvider>
      </body>
    </html>
  );
}
