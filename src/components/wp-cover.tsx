import { FC, ReactNode } from "react";
import Image from "next/image";

interface WPCoverProps {
  background: string;
  children: ReactNode;
}

const WpCover: FC<WPCoverProps> = ({ background, children }) => {
  return (
    <div className="relative flex h-screen min-h-[400px] items-center justify-center bg-secondary">
      <Image
        src={background}
        alt="Cover"
        fill
        className="object-cover mix-blend-soft-light"
      />
      {children && <div className="z-10 max-w-5xl">{children}</div>}
    </div>
  );
};

export default WpCover;
