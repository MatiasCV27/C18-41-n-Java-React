// Layout.tsx
import { Navigate, Outlet } from 'react-router-dom';
import MenuBarContainer from '@/components/Menubar/Menubar.container';
import SidebarContainer from '@/components/Sidebar/Sidebar.container';
import React, { ReactNode } from 'react';
import { useAuthStore } from '@/stores/auth/auth.store';
import DashboardHeaderContainer from '@/components/DashboardHeader/DashboardHeader.container';

interface LayoutProps {
    children?: ReactNode;
}
const Layout: React.FC<LayoutProps> = () => {
    const status = useAuthStore((state) => state.status);

    if (status === 'unauthorized') {
        return <Navigate to="/signin" />;
    }
    return (
        <div className="grid grid-cols-8 grid-flow-row">
            <div className="col-start-1 col-end-3 row-start-2 min-h-[900px] ">
                <MenuBarContainer />
            </div>
            <div className="col-start-1 col-end-9 row-start-1">
                <DashboardHeaderContainer/>
            </div>
            <div className="col-start-3 col-end-7 row-start-2">
                <Outlet />
            </div>
            <div className="col-start-7 col-end-9 row-start-2 flex flex-col items-end ">
                <SidebarContainer />
            </div>
        </div>
    );
};

export default Layout;
