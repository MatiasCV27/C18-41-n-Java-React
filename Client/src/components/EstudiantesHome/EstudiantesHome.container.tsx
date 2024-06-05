// EstudiantesHome.container.tsx
import React from "react";
import EstudiantesHomeView from "./EstudiantesHome.view";

const EstudiantesHomeContainer: React.FC = () => {
  const calendarios = ["Google Calendar"];

  const handleExploreMentoresClick = () => {
    console.log("Explorar mentores");
  };

  return (
    <div className="w-full mx-auto ">
      <EstudiantesHomeView
        calendarios={calendarios}
        onExploreMentoresClick={handleExploreMentoresClick}
      />
    </div>
  );
};

export default EstudiantesHomeContainer;
