import { Button } from "@/components/ui/button";
import {
  Clock,
  CalendarDays,
  CircleCheck,
  CircleX,
  BadgeCheck,
} from "lucide-react";

const EstudianteHomeSolicitudView: React.FC = () => {
  return (
    <div className="">
      <p className="mb-4 text-lg">
        Tienes solicitudes pendientes. Acepta a los estudiantes con los que
        desees impartir clases.
      </p>
      <div className="rounded-lg p-4 flex">
        {/* Contenedor Izquierdo - 25% */}
        <div className="w-1/5 flex items-center justify-center">
          <img
            src="https://img.freepik.com/free-photo/portrait-hispanic-college-student-carrying-backpack-standing-school-hallway_662251-1109.jpg?t=st=1717297851~exp=1717301451~hmac=9351073af22c9124dff2845925ce54fb08b3c40f3730cd3abf15f9855c304877&w=740
            "
            alt="Jeremy Wilson"
            className="rounded-lg w-44 h-44 object-cover"
          />
        </div>

        {/* Contenedor Derecho - 75% */}
        <div className="w-3/5 flex flex-col">
          {/* Parte Superior - 80% */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">Jeremy Wilson</h2>
              <p className="mt-2 text-gray-700">
                "Quiero aprender a programar, vi que tienes experiencia como
                desarrollador de software, me gustaría tomar una clase contigo."
              </p>
            </div>

            <div className="flex flex-col w-full justify-center items-end">
              <div className="flex items-center space-x-1">
                <Clock />
                <span className="material-icons text-gray-500">schedule</span>
                <span>8:30 - 9:00 pm</span>
              </div>
              <div className="flex items-center space-x-1 mt-2">
                <CalendarDays />
                <span className="material-icons text-gray-500">event</span>
                <span>Lunes 24 Mayo</span>
              </div>
            </div>
          </div>

          {/* Parte Inferior - 20% */}
          <div className="flex justify-end">
            <div className="flex space-x-2 text-white">
              <Button className="bg-accent-foreground rounded-xl shadow-md w-[111px]">
                <CircleX className="mr-2 w-[18px] h-[18px]" />
                Declinar
              </Button>
              <Button className="shadow-md w-[111px] bg-accent text-black rounded-xl">
                <CircleCheck className="mr-2 w-[18px] h-[18px]" /> 
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudianteHomeSolicitudView;
