import Layout from "@/layout/Layout";
import UserHomeBannerContainer from "@/components/UserHomeBanner/UserHomeBanner.container";
import UserHomeSearchContainer from "@/components/UserHomeSearch/UserHomeSearch.container";

// interface Props {}

const HomeView = () => {
  return (
    <>
      <Layout>
        <main className="flex flex-col mt-[24px]">
          <UserHomeSearchContainer />
          <UserHomeBannerContainer />
        </main>
      </Layout>
    </>
  );
};

export default HomeView;
