// TutoresHomeCard.view.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Maletin from "../icons/Maletin";
import RayoCeleste from "../icons/RayoCeleste";
import Estrella from "../icons/Estrella";

interface TutoresHomeCardViewProps {
  id: number;
  nombre: string;
  especialidad: string[];
  intercambiosExitosos: number;
}

const TutoresHomeCardView: React.FC<TutoresHomeCardViewProps> = ({ id, nombre, especialidad, intercambiosExitosos }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tutores/${id}`);
  };

  return (
    <div className="w-[212px] h-[329px] rounded-lg container cursor-pointer" onClick={handleCardClick}>
      <div className="flex flex-col gap-4">
        <img
          src="https://img.freepik.com/premium-photo/photo-students-greeting-their-teacher-classroom-teacher-day-concept-generative-ai_742418-2059.jpg?w=826"
          alt="Card Image"
          className="w-[182px] h-auto rounded-lg"
        />
        <div className="inline-flex items-center justify-between">
          <h2 className="text-base font-medium text-muted leading-6">
            {nombre}
          </h2>
          <span className="flex items-center text-base font-medium text-muted leading-6">
            5.0
            <Estrella size={14} />
          </span>
        </div>
        <div className="flex items-center">
          <Maletin size={24} />
          <span className="ml-2 text-xs font-normal">
            {especialidad.join(", ")}
          </span>
        </div>
        <div className="flex items-center">
          <RayoCeleste size={24} />
          <span className="ml-2 text-xs font-normal">
            Intercambios exitosos: {intercambiosExitosos}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TutoresHomeCardView;
