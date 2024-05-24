import React from "react";
import MenubarContainer from "@/components/Menubar/Menubar.container";
import SidebarContainer from "@/components/Sidebar/Sidebar.container";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <MenubarContainer />
      <div>{children}</div>
      <SidebarContainer />
    </div>
  );
};

export default Layout;
