import { ReactNode } from "react";
import { TopNav } from "./top-nav";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <TopNav />
      <div>{children}</div>
    </div>
  );
};
