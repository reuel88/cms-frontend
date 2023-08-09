import { ElementType, FC, ReactNode } from "react";
import { cn } from "@/libs/utils";

interface SiteContainerProps<T extends ElementType = "div"> {
  as?: T;
  bgContent?: ReactNode;
  children: ReactNode;
  className?: string;
}

const SiteContainer: FC<SiteContainerProps> = ({
  children,
  as,
  bgContent,
  className = "",
  ...props
}) => {
  const Component = as || "div";

  return (
    <Component
      className={cn("bg-white py-16 md:py-24 lg:py-32", className!)}
      {...props}
    >
      {bgContent}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </Component>
  );
};

export default SiteContainer;
