import { FC, ReactNode } from "react";
import { cn } from "@/libs/utils";

interface SiteAsideProps {
  children: ReactNode;
}

interface SiteAsideContainerProps {
  children: ReactNode;
  className?: string;
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
    <aside className={cn("flex flex-col space-y-4", className)} {...props}>
      {children}
    </aside>
  );
};

export default SiteAside;
