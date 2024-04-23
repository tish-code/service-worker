import React, { ReactNode, useState } from "react";
import { TopNav } from "./top-nav";
import { SideNav } from "./side-nav";

interface ILayout {
  children: ReactNode;
  navMethods?: {
    toAbout: () => void;
    toHome: () => void;
    toServices: () => void;
    toContact: () => void;
  };
}

export const Layout: React.FC<ILayout> = ({ children, navMethods }) => {
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
