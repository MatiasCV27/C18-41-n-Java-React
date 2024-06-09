import React from "react";
import Maletin from "../icons/Maletin";
import RayoCeleste from "../icons/RayoCeleste";
import Estrella from "../icons/Estrella";

interface TutoresHomeCardViewProps {
  nombre: string;
  especialidad: string[];
  intercambiosExitosos: number;
}

const TutoresHomeCardView: React.FC<TutoresHomeCardViewProps> = ({ nombre, especialidad, intercambiosExitosos }) => {
  return (
    <div className="w-[212px] h-[329px] rounded-lg container">
      <div className="flex flex-col gap-4">
        <img
          src="https://via.placeholder.com/40"
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
