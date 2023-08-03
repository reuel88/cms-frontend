"use client";

import { FC } from "react";
import { useTranslations } from "use-intl";

const PageTitle: FC = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="">
      <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-primary md:text-5xl">
        {t("title")}
      </h1>
      <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-primary">{chunks}</code>
          ),
        })}
      </p>
    </div>
  );
};

export default PageTitle;
