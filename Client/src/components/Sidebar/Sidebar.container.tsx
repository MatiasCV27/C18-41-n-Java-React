import { useAuthStore } from '@/stores/auth/auth.store';
import SidebarView from './Sidebar.view';

const SidebarContainer = () => {
    const logoutUser = useAuthStore((state) => state.logoutUser);
    const handleLogout = () => {
        logoutUser();
    };

    return (
        <>
            <SidebarView onLogout={handleLogout} />
        </>
    );
};

export default SidebarContainer;
