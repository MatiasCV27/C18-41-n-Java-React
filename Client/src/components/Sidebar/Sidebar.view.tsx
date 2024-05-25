import React from "react";
import { Zap, BellDot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationCardContainer from "../NotificationCard/NotificationCard.container";

const SidebarView: React.FC = () => {
  return (
    <aside className="fixed top-6 bottom-6 right-6 w-[329.5px] flex flex-col justify-start">
      <div className="flex items-center justify-between p-2">
        <div className="flex-1 flex items-center justify-end space-x-6">
          <div className="flex space-x-2">
            <span className="text-black font-medium text-xl">1</span>
            <div className="bg-accent rounded-full p-1 border border-black">
              <Zap size={25} strokeWidth={2} color="black" fill="yellow" />
            </div>
          </div>
          <BellDot size={30} color="black" />
          <Avatar className="h-[50px] w-[50px] border-2 border-black">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar de usuario"
            />
            <AvatarFallback>Usuario</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="bg-transparent overflow-x-hidden overflow-y-auto bg-red-700 flex flex-col space-y-4">
        <NotificationCardContainer
          title="Imparte tu primera clase"
          description="Desbloquea esta misión y gana puntos"
          pendingEvaluations={3}
          totalEvaluations={10}
          iconType="zap"
        />
        <NotificationCardContainer
          title="Evaluaciones pendientes"
          description="Certifica tus conocimientos realizando tus evaluaciones"
          pendingEvaluations={3}
          totalEvaluations={10}
          iconType="calendarCheck"
        />
        
      </div>
    </aside>
  );
};

export default SidebarView;
