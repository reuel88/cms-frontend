import createMiddleware from "next-intl/middleware";

// TODO: Make constants for locales
export default createMiddleware({
  locales: ["en", "de", "ar"],
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
