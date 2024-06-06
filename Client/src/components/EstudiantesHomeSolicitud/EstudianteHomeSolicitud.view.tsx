import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Calendario from "../icons/Calendario";
import Horario from "../icons/Horario";
import ModalAceptar from "../icons/ModalAceptar";
import ModalRechazar from "../icons/ModalRechazar";

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
                <Horario size={18} />
                <span className="text-gray-500">8:30 - 9:00 pm</span>
              </div>
              <div className="flex items-center space-x-1 w-[160px]">
                <Calendario size={18}  />
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
        <DialogContent className="max-w-2xl bg-accent">
          <DialogHeader>
            <div className="flex justify-center items-center p-4">
              <ModalAceptar size={125} />
            </div>
            <DialogTitle className="text-xl font-bold mt-4 bg-white p-2 text-center rounded-lg">
              Solicitud aceptada exitosamente
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center mt-2 text-black font-medium text-lg">
            Al acceder a tu calendario podrás ver cuando se acerca la fecha de
            dar tu tutoría, además de que la plataforma te notificará.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* Modal de rechazo */}
      <Dialog open={isRejectModalOpen} onOpenChange={setRejectModalOpen}>
        <DialogContent className="max-w-2xl bg-accent">
          <DialogHeader>
            <div className="flex justify-center items-center p-4">
             <ModalRechazar size={125} />
            </div>
            <DialogTitle className="text-xl font-bold mt-4 bg-muted rounded-lg text-center p-2 text-white">
              ¿Estás seguro de rechazar?
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center mt-2">
            <div className="flex space-x-4 justify-center mt-4 font-medium text-base">
              <Button
                variant="destructive"
                onClick={() => setRejectModalOpen(false)}
              >
                Estoy seguro, rechazar
              </Button>
              <Button
                variant="outline"
                onClick={() => setRejectModalOpen(false)}
                className="font-medium text-base"
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
