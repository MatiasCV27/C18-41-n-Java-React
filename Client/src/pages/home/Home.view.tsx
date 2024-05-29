import UserHomeBannerContainer from "@/components/UserHomeBanner/UserHomeBanner.container";
import UserHomeSearchContainer from "@/components/UserHomeSearch/UserHomeSearch.container";
import UserHomeCardContainer from "@/components/UserHomeCard/UserHomeCard.container";
import CronogramaContainer from "@/components/Cronograma/Cronograma.container";
import { useEffect, useState } from "react";

interface CardData {
  id: number;
  title: string;
  completedClasses: number;
  totalClasses: number;
}

const HomeView = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const exampleData: CardData[] = [
        { id: 1, title: "Card 1", completedClasses: 3, totalClasses: 10 },
        { id: 2, title: "Card 2", completedClasses: 5, totalClasses: 8 },
        { id: 3, title: "Card 3", completedClasses: 7, totalClasses: 12 },
        { id: 4, title: "Card 4", completedClasses: 2, totalClasses: 6 },
        { id: 5, title: "Card 5", completedClasses: 6, totalClasses: 9 },
      ];
      setCardsData(exampleData);
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col mt-[24px] w-[1174px] mx-auto">
      <UserHomeSearchContainer />
      <UserHomeBannerContainer />
      <section className="w-full mt-[34px] flex justify-between">
        {cardsData.map((card) => (
          <UserHomeCardContainer
            key={card.id}
            title={card.title}
            completedClasses={card.completedClasses}
            totalClasses={card.totalClasses}
          />
        ))}
      </section>
      <div className="absolute bottom-[24px] flex justify-center">
        <CronogramaContainer />
      </div>
    </main>
  );
};

export default HomeView;
