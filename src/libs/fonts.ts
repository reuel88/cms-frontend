
type TextAlignMap = {
  [key: string]: string;
}

export const getTextAlign = (alignment = "left") => {
  const textAlignMap:TextAlignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return `${textAlignMap[alignment]}` || "";
};

type FontSizeMap = {
  [key: string]: string;
}

export const getFontSizeForHeading = (level = 1) => {
  const fontSizeMap:FontSizeMap = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  return `${fontSizeMap[level]}` || "";
};
