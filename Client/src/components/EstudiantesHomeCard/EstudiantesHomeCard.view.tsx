import React from "react";
import {
  Card,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Calendario from "../icons/Calendario";
import Horario from "../icons/Horario";

interface EstudiantesHomeCardProps {
  avatarUrl: string;
}

const EstudiantesHomeCardView: React.FC<EstudiantesHomeCardProps> = ({ avatarUrl }) => {
  
  return (
    <Card className="w-[212px] h-auto rounded-lg bg-secondary">
      <CardHeader className="flex flex-col gap-2">
        <img
          src={avatarUrl}
          className="w-[182px] h-[165px] rounded-lg object-cover mx-auto"
        />
        <CardTitle className="text-base font-medium text-black leading-6">
          Nombre Alumno
        </CardTitle>
        <CardDescription className="flex items-center">
          <Horario size={24} />
          <span className="ml-1 text-xs font-bold text-black">
            Horario: 09:00 - 10:00
          </span>
        </CardDescription>
        <CardDescription className="flex items-center">
          <Calendario size={24} />
          <span className="ml-1 text-xs font-bold text-black">
            Fecha: 2023-01-01
          </span>
        </CardDescription>
        <CardFooter>
          <Button className="shadow-md w-auto bg-accent text-black hover:text-white font-medium">
            Reunirse <ArrowRight size="18" className="ml-2" />
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default EstudiantesHomeCardView;
