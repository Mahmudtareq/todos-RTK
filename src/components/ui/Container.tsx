import { ReactNode } from "react";

type TChildrenProps = {
  children: ReactNode;
};

const Container = ({ children }: TChildrenProps) => {
  return <div className="w-full mx-auto max-w-6xl">{children}</div>;
};

export default Container;
