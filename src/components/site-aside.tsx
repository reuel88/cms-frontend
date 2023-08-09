import { FC, ReactNode } from "react";
import { cn } from "@/libs/utils";

interface SiteAsideProps {
  children: ReactNode;
}

interface SiteAsideContainerProps {
  children: ReactNode;
  className?: string;
}

interface SiteAsideHeaderProps {
  title: ReactNode;
  level?: number;
}

const SiteAside: FC<SiteAsideProps> = ({ children }) => {
  return (
    <aside className="col-span-1 space-y-8 lg:col-start-1">{children}</aside>
  );
};

export const SiteAsideContainer: FC<SiteAsideContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col space-y-4", className)} {...props}>
      {children}
    </div>
  );
};

export const SiteAsideHeader: FC<SiteAsideHeaderProps> = ({
  title,
  level = 2,
}) => {
  const Tag = `h${level}`;

  return (
    <Tag className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
      {title}
    </Tag>
  );
};

export default SiteAside;
