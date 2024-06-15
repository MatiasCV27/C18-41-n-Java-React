// EstudiantesHome.container.tsx
import React from "react";
import EstudiantesHomeView from "./EstudiantesHome.view";
import { useNavigate } from "react-router-dom";

const EstudiantesHomeContainer: React.FC = () => {
  const navigate = useNavigate();
 

  const handleExploreMentoresClick = () => {
    navigate("/explorar");
  };

  return (
    <div className="w-full mx-auto ">
      <EstudiantesHomeView
        
        onExploreMentoresClick={handleExploreMentoresClick}
      />
    </div>
  );
};

export default EstudiantesHomeContainer;
