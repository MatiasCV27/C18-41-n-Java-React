import UserHomeBannerContainer from "@/components/UserHomeBanner/UserHomeBanner.container";
import UserHomeCardContainer from "@/components/UserHomeCard/UserHomeCard.container";
import CronogramaContainer from "@/components/Cronograma/Cronograma.container";
import BigCalendarContainer from "@/components/BigCalendar/BigCalendar.container";
import UserHomeStudentsCardsContainer from "@/components/UserHomeStudentsCards/UserHomeStudentsCards.container";

const HomeView = () => {
  return (
    <main className="flex flex-col space-y-[24px] w-auto mx-auto">
      <UserHomeBannerContainer />
      <UserHomeStudentsCardsContainer />
      {/* <UserHomeCardContainer /> */}
      {/* <CronogramaContainer /> */}
      <BigCalendarContainer/>
    </main>
  );
};

export default HomeView;
