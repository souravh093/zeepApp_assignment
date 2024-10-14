import { ReactNode } from "react";

type TNavbarProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TNavbarProps) => {
  return (
    <div
      className={`${className} max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl 2xl:max-w-7xl m-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
