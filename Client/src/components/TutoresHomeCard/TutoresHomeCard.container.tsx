// TutoresHomeCard.container.tsx

import React from "react";
import TutoresHomeCardView from "./TutoresHomeCard.view";

interface Tutor {
  id: number;
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
      {tutores.map((tutor) => (
        <TutoresHomeCardView
          key={tutor.id}
          id={tutor.id}
          nombre={tutor.nombre}
          especialidad={tutor.especialidad}
          intercambiosExitosos={tutor.intercambiosExitosos}
        />
      ))}
    </main>
  );
};

export default TutoresHomeCardContainer;
