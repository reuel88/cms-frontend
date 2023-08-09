import { FC, ReactNode } from "react";
import { cn } from "@/libs/utils";

export interface SectionHeaderProps {
  title: ReactNode;
  subTitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  level?: number;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subTitle,
  children,
  className = "",
  level = 2,
}) => {
  const Tag = `h${level}`;

  return (
    <div className={cn("mx-auto max-w-2xl", className)}>
      {subTitle && (
        <p className="mb-2 text-base font-semibold leading-7 text-indigo-600">
          {subTitle}
        </p>
      )}
      <Tag className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </Tag>
      {children && (
        <div className="mt-6 text-lg leading-8 text-gray-600">{children}</div>
      )}
    </div>
  );
};

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
