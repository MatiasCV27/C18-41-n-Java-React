import React, { useEffect, useState } from "react";
import EstudiantesHomeCardContainer from "@/components/EstudiantesHomeCard/EstudiantesHomeCard.container";

const UserHomeCardContainer: React.FC = () => {
  const [cardCount, setCardCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setCardCount(5);
      } else if (window.innerWidth >= 1280) {
        setCardCount(3);
      } else if (window.innerWidth >= 1024) {
        setCardCount(2);
      } else {
        setCardCount(2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="w-full h-auto flex flex-col ">
      <h2 className="text-lg font-bold text-left mt-4">
        Próximas clases con tus tutores
      </h2>
      <div className="w-full h-auto flex justify-between flex-wrap">
        {[...Array(cardCount)].map((_, index) => (
          <EstudiantesHomeCardContainer key={index} />
        ))}
      </div>
    </article>
  );
};

export default UserHomeCardContainer;
