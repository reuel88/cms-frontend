import { FC, ReactNode } from "react";

interface SiteAsideProps {
  children: ReactNode;
}

interface SiteAsideContainerProps {
  children: ReactNode;
}

const SiteAside: FC<SiteAsideProps> = ({ children }) => {
  return (
    <aside className="col-span-1 space-y-8 lg:col-start-1">{children}</aside>
  );
};

export const SiteAsideContainer: FC<SiteAsideContainerProps> = ({
  children,
}) => {
  return <aside className="flex flex-col space-y-4">{children}</aside>;
};

export default SiteAside;
