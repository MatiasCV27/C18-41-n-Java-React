// Layout.tsx
import { Navigate, Outlet } from 'react-router-dom';
import MenuBarContainer from '@/components/Menubar/Menubar.container';
import SidebarContainer from '@/components/Sidebar/Sidebar.container';
import React, { ReactNode } from 'react';
import { useAuthStore } from '@/stores/auth/auth.store';

interface LayoutProps {
    children?: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const status = useAuthStore((state) => state.status);

    if (status === 'unauthorized') {
        return <Navigate to="/signin" />;
    }

    console.log(status);
    return (
        <div className="flex">
            <MenuBarContainer />
            <div className="flex-grow p-6">
                {children}
                <Outlet />
            </div>
            <SidebarContainer />
        </div>
    );
};

export default Layout;
