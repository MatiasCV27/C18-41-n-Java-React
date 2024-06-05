import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, CalendarDays, CircleCheck, CircleX } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ThumbUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3.68L14 9z" />
      <line x1="9" y1="22" x2="9" y2="13" />
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <path d="M10 15v4a3 3 0 0 0 6 0v-4h3a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.68L10 15z" />
      <line x1="15" y1="2" x2="15" y2="11" />
    </svg>
  );
}

const EstudianteHomeSolicitudView: React.FC = () => {
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);

  return (
    <div className="w-full h-full shadow-sm shadow-muted">
      <div className="rounded-lg p-4 flex w-full h-full gap-4">
        {/* Contenedor Izquierdo - 25% */}
        <div className="w-1/5 flex items-start justify-center">
          <img
            src="https://img.freepik.com/free-photo/portrait-hispanic-college-student-carrying-backpack-standing-school-hallway_662251-1109.jpg?t=st=1717297851~exp=1717301451~hmac=9351073af22c9124dff2845925ce54fb08b3c40f3730cd3abf15f9855c304877&w=740"
            alt="Jeremy Wilson"
            className="rounded-lg w-28 h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-44 2xl:h-44 object-cover"
          />
        </div>

        {/* Contenedor Derecho - 75% */}
        <div className="w-4/5 flex flex-col justify-between">
          {/* Parte Superior - 80% */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">Jeremy Wilson</h2>
              <p className="mt-2 text-gray-700 text-pretty">
                Quiero aprender a programar, vi que tienes experiencia como
                desarrollador de software, me gustaría tomar una clase contigo
              </p>
            </div>

            <div className="flex flex-col items-end w-2/3 p-4 space-y-4">
              <div className="flex items-center space-x-1 w-[160px]">
                <Clock />
                <span className="text-gray-500">8:30 - 9:00 pm</span>
              </div>
              <div className="flex items-center space-x-1 w-[160px]">
                <CalendarDays />
                <span className="text-gray-500">Lunes 24 Mayo</span>
              </div>
            </div>
          </div>

          {/* Parte Inferior - 20% */}
          <div className="flex justify-end mt-4">
            <div className="flex space-x-2 text-white">
              <Button
                className="bg-accent-foreground rounded-xl shadow-md w-[111px]"
                onClick={() => setRejectModalOpen(true)}
              >
                <CircleX className="mr-2 w-[18px] h-[18px]" />
                Declinar
              </Button>
              <Button
                className="shadow-md w-[111px] bg-accent text-black rounded-xl hover:text-white"
                onClick={() => setAcceptModalOpen(true)}
              >
                <CircleCheck className="mr-2 w-[18px] h-[18px]" />
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de aceptación */}
      <Dialog open={isAcceptModalOpen} onOpenChange={setAcceptModalOpen}>
        <DialogContent className="max-w-lg bg-blue-400">
          <DialogHeader>
            <ThumbUpIcon />
            <DialogTitle className="text-lg font-bold mt-4">
              Solicitud aceptada exitosamente
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center mt-2">
            Al acceder a tu calendario podrás ver cuando se acerca la fecha de
            dar tu tutoría, además de que la plataforma te notificará.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* Modal de rechazo */}
      <Dialog open={isRejectModalOpen} onOpenChange={setRejectModalOpen}>
        <DialogContent className="max-w-lg bg-blue-400">
          <DialogHeader>
            <ThumbDownIcon />
            <DialogTitle className="text-lg font-bold mt-4">
              ¿Estás seguro de rechazar?
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center mt-2">
            <div className="flex space-x-4 justify-center mt-4">
              <Button
                variant="destructive"
                onClick={() => setRejectModalOpen(false)}
              >
                Estoy seguro, rechazar
              </Button>
              <Button
                variant="outline"
                onClick={() => setRejectModalOpen(false)}
              >
                Volver atrás
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EstudianteHomeSolicitudView;
