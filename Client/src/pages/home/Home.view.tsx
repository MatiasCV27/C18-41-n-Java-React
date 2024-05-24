import Layout from '@/layout/Layout';
import UserHomeBannerContainer from '@/components/UserHomeBanner/UserHomeBanner.container';

// interface Props {}

const HomeView = () => {
    return (
        <>
            <Layout>
                <UserHomeBannerContainer />
            </Layout>
        </>
    );
};

export default HomeView;
