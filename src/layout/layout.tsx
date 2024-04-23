import { ReactNode, useState } from "react";
import { TopNav } from "./top-nav";
import { SideNav } from "./side-nav";

export const Layout = ({
  navMethods,
  children,
}: {
  navMethods: any;
  children: any;
}) => {
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
