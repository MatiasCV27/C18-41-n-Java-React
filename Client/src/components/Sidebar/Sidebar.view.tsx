import React from "react";
import { Zap, BellDot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationCardContainer from "../NotificationCard/NotificationCard.container";
import CalendarContainer from "../Calendar/Calendar.container";
import UserHomeNewsContainer from "@/components/UserHomeNews/UserHomeNews.container";

const SidebarView: React.FC = () => {
  return (
    <aside className="fixed top-6 bottom-6 right-6 w-[291px] flex flex-col justify-start">
      {/* Iconos de punto, notificacion y avatar */}
      <div className="flex items-center justify-between p-2">
        <div className="flex-1 flex items-center justify-end space-x-6">
          <div className="flex space-x-2">
            <span className="text-black font-medium text-xl">1</span>
            <div className="bg-accent rounded-full p-1 border border-black">
              <Zap size={25} strokeWidth={2} color="black" fill="yellow" />
            </div>
          </div>
          <BellDot size={30} color="black" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-[50px] w-[50px] border-2 border-black cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Avatar de usuario"
                />
                <AvatarFallback>Usuario</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Mis datos</DropdownMenuItem>
                <DropdownMenuItem>Mi suscripción</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Ayuda</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Contenido restante del Sidebar: Calendario, notificaciones, etc */}
      <CalendarContainer />
      <div className="bg-transparent overflow-x-hidden overflow-y-auto bg-red-700 flex flex-col space-y-4 pt-2 h-full">
        <NotificationCardContainer
          title="Imparte tu primera clase"
          description="Desbloquea esta misión y gana puntos"
          pendingEvaluations={3}
          totalEvaluations={10}
          iconType="zap"
        />
        <NotificationCardContainer
          title="Evaluaciones pendientes"
          description="Certifica tus conocimientos"
          pendingEvaluations={3}
          totalEvaluations={10}
          iconType="calendarCheck"
        />
      </div>
      <UserHomeNewsContainer />
    </aside>
  );
};

export default SidebarView;
