// TutoresHomeCardContainer.tsx
import React from "react";
import TutoresHomeCardView from "./TutoresHomeCard.view";

interface Tutor {
  idTutor?: number;
  fullname?: string;
  skills?: string;
  exchangesMade?: number;
  picture?: string;
  score?: number;
}

interface TutoresHomeCardContainerProps {
  tutores: Tutor[];
}

const TutoresHomeCardContainer: React.FC<TutoresHomeCardContainerProps> = ({
  tutores,
}) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
      {tutores.map((tutor, index) => (
        <TutoresHomeCardView
          key={index}
          idTutor={tutor.idTutor}
          fullname={tutor.fullname}
          skills={tutor.skills}
          exchangesMade={tutor.exchangesMade}
          score={tutor.score}
          picture={tutor.picture}
        />
      ))}
    </main>
  );
};

export default TutoresHomeCardContainer;
