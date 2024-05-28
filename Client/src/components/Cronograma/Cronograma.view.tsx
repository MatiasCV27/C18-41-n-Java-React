import React from "react";

interface Clase {
  dia: string;
  hora: string;
  nombre: string;
  clase: string;
  img: string;
}

interface CronogramaViewProps {
  clases: Clase[];
}

const diasSemana = ["Lu", "Ma", "Mi", "Ju", "Vi"];
const horas = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

const CronogramaView: React.FC<CronogramaViewProps> = ({ clases }) => {
  return (
    <div className="w-[1174px] h-auto bg-white border-2 border-secondary rounded-lg p-[24px] text-muted">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Cronograma</h2>
        <div className="flex items-center">
          <span className="mr-2 cursor-pointer hover:underline">Ver todo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-1"></div>
        {horas.map((hora) => (
          <div key={hora} className="text-center text-sm">
            {hora}
          </div>
        ))}
      </div>
      {diasSemana.map((dia) => (
        <div key={dia} className="grid grid-cols-8 gap-2 items-center my-[9px]">
          <div className="col-span-1 font-bold">{dia}</div>
          {horas.map((hora) => {
            const clase = clases.find((c) => c.dia === dia && c.hora === hora);
            return (
              <div key={hora} className="col-span-1">
                {clase ? (
                  <div className="bg-purple-200 p-2 rounded-lg flex items-center">
                    <img
                      src={clase.img}
                      alt={clase.nombre}
                      className="h-6 w-6 rounded-full mr-2"
                    />
                    <div>
                      <div className="font-bold text-xs">{clase.nombre}</div>
                      <div className="text-xs">{clase.clase}</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-12"></div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CronogramaView;
