import { ReactNode, useState } from "react";
import { TopNav } from "./top-nav";
import { SideNav } from "./side-nav";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="">
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onNavClose={() => setOpenNav(false)} open={openNav} />
      <div>{children}</div>
    </div>
  );
};
