import { FC } from "react";
import Image from "next/image";

const SiteLogo: FC = () => {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

export default SiteLogo;
