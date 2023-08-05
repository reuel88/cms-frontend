import { FC, ReactNode } from "react";

interface SiteContainerProps {
  children: ReactNode;
}

const SiteContainer: FC<SiteContainerProps> = ({ children }) => {
  return (
    <div className="bg-white pb-32 pt-8 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default SiteContainer;
