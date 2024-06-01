// UserHomeCardContainer.jsx
import { useEffect, useState } from "react";
import UserHomeCardView from "./UserHomeCard.view";

interface CardData {
  id: number;
  title: string;
  completedClasses: number;
  totalClasses: number;
}

const UserHomeCardContainer: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const getCardCount = () => {
    if (window.innerWidth >= 1536) {
      return 5; // 2xl
    } else if (window.innerWidth >= 1280) {
      return 3; // xl
    } else if (window.innerWidth >= 1024) {
      return 2; // lg
    } else {
      return 2; // default
    }
  };

  const [cardCount, setCardCount] = useState(getCardCount());

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

  useEffect(() => {
    const handleResize = () => {
      setCardCount(getCardCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-auto flex justify-between flex-wrap">
      {cardsData.slice(0, cardCount).map((card) => (
        <UserHomeCardView
          key={card.id}
          title={card.title}
          completedClasses={card.completedClasses}
          totalClasses={card.totalClasses}
        />
      ))}
    </section>
  );
};

export default UserHomeCardContainer;
