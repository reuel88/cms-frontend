import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const relativeToAbsoluteUrl = (htmlString = "") => {
  return htmlString.split(process.env.NEXT_PUBLIC_WP_SITE_URL).join("");
};

export const removeStartingTrailingSlash = (uri: string) => {
  if (uri.startsWith("/") && uri.endsWith("/")) {
    return uri.substring(1, uri.length - 1);
  }

  if (uri.startsWith("/")) {
    return uri.substring(1);
  }

  if (uri.endsWith("/")) {
    return uri.substring(0, uri.length - 1);
  }

  return uri;
};
