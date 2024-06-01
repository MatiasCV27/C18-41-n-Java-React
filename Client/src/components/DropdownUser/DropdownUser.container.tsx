import { useAuthStore } from '@/stores/auth/auth.store';
import DropdownUserView from './DropdownUser.view';



const DropdownUserContainer = () => {
    const name = useAuthStore((state) => state.user?.name);
    const lastname = useAuthStore((state) => state.user?.lastname);
    const logoutUser = useAuthStore((state) => state.logoutUser);
    const handleLogout = () => {
        logoutUser();
    };
    return <DropdownUserView onLogout={handleLogout} name={name} lastname={lastname}/>;
};

export default DropdownUserContainer;
