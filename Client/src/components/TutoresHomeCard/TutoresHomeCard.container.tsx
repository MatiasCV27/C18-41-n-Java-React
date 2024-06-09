import React from "react";
import TutoresHomeCardView from "./TutoresHomeCard.view";

interface Tutor {
  nombre: string;
  especialidad: string[];
  intercambiosExitosos: number;
}

interface TutoresHomeCardContainerProps {
  tutores: Tutor[];
}

const TutoresHomeCardContainer: React.FC<TutoresHomeCardContainerProps> = ({ tutores }) => {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
      {tutores.map((tutor, index) => (
        <TutoresHomeCardView
          key={index}
          nombre={tutor.nombre}
          especialidad={tutor.especialidad}
          intercambiosExitosos={tutor.intercambiosExitosos}
        />
      ))}
    </main>
  );
};

export default TutoresHomeCardContainer;
