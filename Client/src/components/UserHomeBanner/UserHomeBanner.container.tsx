import { useAuthStore } from '@/stores/auth/auth.store';
import UserHomeBannerView from './UserHomeBanner.view';

const UserHomeBannerContainer = () => {
    

    const user = useAuthStore((state) => state.user);
    const name = user?.name || '';

    return (
        <>
            <UserHomeBannerView name={name} />
        </>
    );
};

export default UserHomeBannerContainer;