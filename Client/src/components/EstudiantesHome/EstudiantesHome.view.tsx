import React, { useState } from "react";
import {
  CalendarDays,
  UserPlus,
  ChevronRight,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EstudiantesHomeCardContainer from "../EstudiantesHomeCard/EstudiantesHomeCard.container";
import TutoresHomeCardContainer from "../TutoresHomeCard/TutoresHomeCard.container";
import EstudianteHomeSolicitudContainer from "../EstudiantesHomeSolicitud/EstudianteHomeSolicitud.container";

const EstudiantesHomeView: React.FC = () => {
  const [calendarios, setCalendarios] = useState<string[]>([
    "Google Calendar",
    "Microsoft Outlook",
    "Apple Calendar",
  ]);

  const [activeTab, setActiveTab] = useState<string>("proximos");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-auto">
      <div>
        <div className="flex space-x-2 mb-2 w-full">
          <CalendarDays size={24} />
          <h2 className="text-base">
            Comporta a tiempo real tu tiempo disponible
          </h2>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold mt-5 mb-2">
            Calendarios vinculados
          </span>
          {calendarios.map((calendario, index) => (
            <div key={index} className="p-4">
              <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4">
                <CalendarCheck size={24} />
                <span className="mx-4 text-[16px] font-bold">{calendario}</span>
                <ChevronRight size={24} />
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex w-full space-x-20">
          <h3
            className={`text-lg font-bold mb-2 cursor-pointer ${
              activeTab === "proximos" && "border-b-2 border-primary"
            }`}
            onClick={() => handleTabChange("proximos")}
          >
            Próximas
          </h3>
          <h3
            className={`text-lg font-bold mb-2 cursor-pointer ${
              activeTab === "pendientes" && "border-b-2 border-primary"
            }`}
            onClick={() => handleTabChange("pendientes")}
          >
            Pendientes
          </h3>
          <h3
            className={`text-lg font-bold mb-2 cursor-pointer ${
              activeTab === "historial" && "border-b-2 border-primary"
            }`}
            onClick={() => handleTabChange("historial")}
          >
            Historial
          </h3>
        </div>

        {activeTab === "proximos" && (
          <div className="mt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              <EstudiantesHomeCardContainer />
              <EstudiantesHomeCardContainer />
              <EstudiantesHomeCardContainer />
              <EstudiantesHomeCardContainer />
              <EstudiantesHomeCardContainer />
              <EstudiantesHomeCardContainer />
            </div>
            <Button className="bg-white text-black hover:bg-accent hover:text-white rounded-lg mt-2 shadow-md">
              <span className="font-semibold">Explora mentores</span>{" "}
              <ArrowRight size={18} className="ml-4" />
            </Button>
          </div>
        )}
        {activeTab === "pendientes" && (
          <div>
            <p className="text-gray-600 mb-4">
              No tienes mentorías pendientes en este momento.
            </p>
            <EstudianteHomeSolicitudContainer />
          </div>
        )}
        {activeTab === "historial" && (
          <div>
            <p className="text-gray-600 mb-4">
              Aún no tienes historial de mentorías.
            </p>
            {/* Aquí puedes mostrar otro contenido relacionado con el historial de mentorías */}
          </div>
        )}
      </div>
    </div>
  );
};

export default EstudiantesHomeView;
