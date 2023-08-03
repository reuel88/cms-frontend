import React, { createElement, FC } from "react";
import { Aboreto } from "next/font/google";
import { cn } from "@/libs/utils";
import { getFontSizeForHeading, getTextAlign } from "@/libs/fonts";

const font = Aboreto({ weight: "400", subsets: ["latin"] });

interface WPHeadingProps {
  textAlign: string;
  level: number;
  textColor: string;
  fontSize: string;
  content: string;
}

const WpHeading: FC<WPHeadingProps> = ({ textAlign, content, level = 2 }) => {
  // html tag
  return createElement(`h${level}`, {
    className: cn(
      "max-w-5xl mx-auto my-5",
      getFontSizeForHeading(level),
      getTextAlign(textAlign),
      font.className,
    ),
    dangerouslySetInnerHTML: { __html: content },
  });
};

export default WpHeading;
