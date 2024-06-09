import React, { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EstudiantesHomeCardContainer from "../EstudiantesHomeCard/EstudiantesHomeCard.container";
import EstudianteHomeSolicitudContainer from "../EstudiantesHomeSolicitud/EstudianteHomeSolicitud.container";
import EstudiantesHomeHistorialContainer from "../EstudiantesHomeHistorial/EstudiantesHomeHistorial.container";
import Calendario31 from "../icons/Calendario31";
import Calendario from "../icons/Calendario";

const TABS = [
  { id: "proximos", label: "Próximas" },
  { id: "pendientes", label: "Pendientes" },
  { id: "historial", label: "Historial" },
];

const EstudiantesHomeView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("proximos");

  const renderContent = () => {
    switch (activeTab) {
      case "proximos":
        return (
          <>
            <p className="mb-4 text-black text-lg">
              Tienes clases próximamente. Reúnete con tus estudiantes en el
              horario acordado.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
              {Array(6).fill(<EstudiantesHomeCardContainer />)}
            </div>
            <Button className="bg-muted text-white hover:bg-accent hover:text-white rounded-lg mt-2 shadow-md">
              <span className="font-semibold">Explora mentores</span>
              <ArrowRight size={18} className="ml-4" />
            </Button>
          </>
        );
      case "pendientes":
        return (
          <>
            <p className="mb-4 text-black text-lg">
              Tienes solicitudes pendientes. Acepta a los estudiantes con los
              que desees impartir clases.
            </p>
            <div className="flex flex-col w-full gap-4">
              {Array(5).fill(<EstudianteHomeSolicitudContainer />)}
            </div>
          </>
        );
      case "historial":
        return <EstudiantesHomeHistorialContainer />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto">
      <div>
        <div className="flex space-x-2 mb-2 w-full">
          <Calendario size={24} />
          <h2 className="text-base">
            Comporta a tiempo real tu tiempo disponible
          </h2>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold mt-5 mb-2">
            Calendarios vinculados
          </span>
          {["Google Calendar", "Microsoft Outlook", "Apple Calendar"].map(
            (calendario, index) => (
              <div key={index} className="p-4">
                <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4">
                  <Calendario31 size={24} />
                  <span className="mx-4 text-[16px] font-bold">
                    {calendario}
                  </span>
                  <ChevronRight size={24} />
                </Button>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex w-full space-x-20">
          {TABS.map((tab) => (
            <h3
              key={tab.id}
              className={`text-lg font-bold mb-2 cursor-pointer hover:border-b-[3px] hover:border-accent ${
                activeTab === tab.id && "border-b-[3px] border-accent"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </h3>
          ))}
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default EstudiantesHomeView;
