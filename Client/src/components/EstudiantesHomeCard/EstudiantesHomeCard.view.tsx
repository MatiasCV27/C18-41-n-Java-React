import React, { useState, useEffect } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";

interface EstudiantesHomeCardProps {
  userData: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  } | null;
}

const EstudiantesHomeCardView: React.FC<EstudiantesHomeCardProps> = ({ userData }) => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Función para obtener una hora aleatoria en el rango de 08:00 a 18:00
    const getRandomTime = (): string => {
      const hour = Math.floor(Math.random() * (18 - 8 + 1)) + 8; // Genera un número entre 8 y 18 (inclusivo)
      return `${hour.toString().padStart(2, '0')}:00`; // Devuelve la hora en formato HH:00
    };

    // Función para obtener una fecha aleatoria dentro del rango de los últimos 30 días
    const getRandomDate = (): string => {
      const today = new Date();
      const randomOffset = Math.floor(Math.random() * 30) + 1; // Genera un número entre 1 y 30
      const randomDate = new Date(today);
      randomDate.setDate(today.getDate() - randomOffset);
      const year = randomDate.getFullYear();
      let month: string | number = randomDate.getMonth() + 1;
      let day: string | number = randomDate.getDate();

      // Ajuste para asegurar que el mes y día tengan dos dígitos
      if (month < 10) {
        month = `0${month}`;
      }
      if (day < 10) {
        day = `0${day}`;
      }

      return `${year}-${month}-${day}`;
    };

    setCurrentTime(getRandomTime());
    setCurrentDate(getRandomDate());
  }, []);

  if (!userData) {
    return <Skeleton className="w-[212px] h-[230px] rounded-lg mx-auto" />;
  }

  const { name, picture } = userData;

  return (
    <Card className="w-[212px] h-auto rounded-lg bg-secondary">
      <CardHeader className="flex flex-col gap-2">
        {!imageLoaded && (
          <Skeleton className="w-[182px] h-[165px] rounded-lg mx-auto" />
        )}
        <img
          src={picture.large}
          className={`w-[182px] h-[165px] rounded-lg object-cover mx-auto ${
            imageLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
        <CardTitle className="text-base font-medium text-black leading-6">
          {name.first} {name.last}
        </CardTitle>
        <CardDescription className="flex items-center">
          <Horario size={24} />
          <span className="ml-1 text-xs font-bold text-black">
            Horario: {currentTime}hrs
          </span>
        </CardDescription>
        <CardDescription className="flex items-center">
          <Calendario size={24} />
          <span className="ml-1 text-xs font-bold text-black">
            Fecha: {currentDate}
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
