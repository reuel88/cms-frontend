import { FC } from "react";
import WpCover from "@/components/wp-cover";
import WpHeading from "@/components/wp-heading";
import WpParagraph from "@/components/wp-paragraph";
import { wpTheme } from "@/libs/wp-theme";

export interface Block {
  name: string;
  id: string;
  attributes: {
    url?: string;
    textAlign?: string;
    level?: number;
    content?: string;
  };
  innerBlocks?: Block[];
}

interface BlockRenderProps {
  blocks: Block[];
}

const WpBlockRender: FC<BlockRenderProps> = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return (
          <WpCover key={block.id} background={block.attributes.url!}>
            {block.innerBlocks && <WpBlockRender blocks={block.innerBlocks} />}
          </WpCover>
        );
      }
      case "core/heading": {
        return (
          <WpHeading
            key={block.id}
            textAlign={block.attributes.textAlign!}
            level={block.attributes.level!}
            textColor={
              wpTheme[block.attributes.textColor] ||
              block.attributes.style.color.text!
            }
            fontSize={block.attributes.level!}
            content={block.attributes.content!}
          />
        );
      }
      case "core/paragraph": {
        return (
          <WpParagraph
            key={block.id}
            textAlign={block.attributes.align!}
            textColor={
              wpTheme[block.attributes.textColor] ||
              block.attributes.style.color.text!
            }
            content={block.attributes.content!}
          />
        );
      }
      default: {
        return null;
      }
    }
  });
};

export default WpBlockRender;
