import { ReactNode } from "react";
import { Hero } from "../sections/hero/hero";
import { TopNav } from "./top-nav";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <TopNav />
      <Hero />
      <div>{children}</div>
    </div>
  );
};
