import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CalendarDays, ArrowRight } from "lucide-react";

const EstudiantesHomeCardView: React.FC = () => {
  return (
    <Card className="w-[212px] h-auto rounded-lg bg-secondary">
      <CardHeader className="flex flex-col gap-3">
        <img
          src="https://img.freepik.com/free-photo/portrait-hispanic-college-student-carrying-backpack-standing-school-hallway_662251-1109.jpg?t=st=1717297851~exp=1717301451~hmac=9351073af22c9124dff2845925ce54fb08b3c40f3730cd3abf15f9855c304877&w=740"
          alt="Foto de estudiante"
          className="w-[182px] h-[165px] rounded-lg object-cover mx-auto"
        />
        <CardTitle className="text-base font-medium text-black leading-6">
          Alumno 1
        </CardTitle>
        <CardDescription className="flex items-center">
          <Clock size="24" />
          <span className="ml-1 text-xs font-bold text-black">
            Horario: 09:00 - 10:00
          </span>
        </CardDescription>
        <CardDescription className="flex items-center">
          <CalendarDays size="24" />
          <span className="ml-1 text-xs font-bold text-black">
            Fecha: 2023-01-01
          </span>
        </CardDescription>
        <CardFooter>
          <Button className="shadow-md w-[109px] bg-accent text-black">
            Reunirse <ArrowRight className="ml-2 w-[18px]	h-[18px]" />
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default EstudiantesHomeCardView;
