// Layout.tsx
import { Navigate, Outlet } from "react-router-dom";
import MenuBarContainer from "@/components/Menubar/Menubar.container";
import SidebarContainer from "@/components/Sidebar/Sidebar.container";
import React, { ReactNode } from "react";
import { useAuthStore } from "@/stores/auth/auth.store";
import DashboardHeaderContainer from "@/components/DashboardHeader/DashboardHeader.container";

interface LayoutProps {
  children?: ReactNode;
}
const Layout: React.FC<LayoutProps> = () => {
  const status = useAuthStore((state) => state.status);

  // if (status === 'unauthorized') {
  //     return <Navigate to="/signin" />;
  // }

  return (
    <>
      <div className="min-h-screen w-full">
        <div>
          <DashboardHeaderContainer />
        </div>
        <div className="flex grow-0">
          <div className=" ">
            <MenuBarContainer />
          </div>
          <div className="grow">
            <Outlet />
          </div>
          <div className="grow-0 ">
            <SidebarContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
