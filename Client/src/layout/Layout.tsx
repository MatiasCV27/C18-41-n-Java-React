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
    //TODO: Recordar habilitar para que fincione correctamente el redireccionamiento
    // const status = useAuthStore((state) => state.status)

    // if (status === 'unauthorized') {
    //     return <Navigate to="/signin" />;
    // }

    return (
        <>
            <div className="flex flex-col min-h-screen  w-full">
                <div className="sticky top-0 bg-background z-50">
                    <DashboardHeaderContainer />
                </div>
                <div className="flex">
                    <div>
                        <MenuBarContainer />
                    </div>
                    <div className=" ml-96 grow">
                        <Outlet />
                    </div>
                    <div className="grow-0">
                        <SidebarContainer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
