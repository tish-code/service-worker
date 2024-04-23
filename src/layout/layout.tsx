import { ReactNode, useState } from "react";
import { TopNav } from "./top-nav";
import { SideNav } from "./side-nav";

interface ILayout {
  navMethods: any;
  children: ReactNode;
}

export const Layout = ({ navMethods, children }: ILayout) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="">
      <TopNav onNavOpen={() => setOpenNav(true)} navMethods={navMethods} />
      <SideNav
        onNavClose={() => setOpenNav(false)}
        open={openNav}
        navMethods={navMethods}
      />
      <div>{children}</div>
    </div>
  );
};
