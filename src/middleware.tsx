import createMiddleware from "next-intl/middleware";
import { languageCodes } from "./constants/locales";

export default createMiddleware({
  locales: languageCodes,
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
