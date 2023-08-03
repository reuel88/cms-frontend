import { createElement, FC } from "react";
import { cn } from "@/libs/utils";
import { getTextAlign } from "@/libs/fonts";
import { relativeToAbsoluteUrl } from "@/libs/utils";

interface WPParagraphProps {
  textAlign: string;
  content: string;
  textColor: string;
}

const WpParagraph: FC<WPParagraphProps> = ({
  textAlign,
  content,
  textColor,
}) => {
  // html tag
  return createElement("p", {
    className: cn("max-w-5xl mx-auto my-5", getTextAlign(textAlign)),
    style: { color: textColor },
    dangerouslySetInnerHTML: { __html: relativeToAbsoluteUrl(content) },
  });
};

export default WpParagraph;
