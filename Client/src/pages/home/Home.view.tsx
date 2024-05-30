import UserHomeBannerContainer from "@/components/UserHomeBanner/UserHomeBanner.container";
import UserHomeSearchContainer from "@/components/UserHomeSearch/UserHomeSearch.container";
import UserHomeCardContainer from "@/components/UserHomeCard/UserHomeCard.container";
import CronogramaContainer from "@/components/Cronograma/Cronograma.container";

const HomeView = () => {
  return (
    <main className="flex flex-col space-y-[24px] w-auto lg:w-[476px] xl:w-[683px] 2xl:w-[1174px] mx-auto">
      <UserHomeSearchContainer />
      <UserHomeBannerContainer />
      <UserHomeCardContainer />
      <CronogramaContainer />
    </main>
  );
};

export default HomeView;
