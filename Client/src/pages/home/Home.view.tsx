import UserHomeBannerContainer from "@/components/UserHomeBanner/UserHomeBanner.container";
import UserHomeCardContainer from "@/components/UserHomeCard/UserHomeCard.container";
import CronogramaContainer from "@/components/Cronograma/Cronograma.container";

const HomeView = () => {
  return (
    <main className="flex flex-col space-y-[24px] w-auto mx-auto">
      <UserHomeBannerContainer />
      <UserHomeCardContainer />
      <CronogramaContainer />
    </main>
  );
};

export default HomeView;
