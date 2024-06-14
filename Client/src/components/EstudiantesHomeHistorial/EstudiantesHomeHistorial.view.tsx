import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Icono personalizado
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent ml-1"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const estudiantes = [
  {
    nombre: "Jeremy Wilson",
    fecha: "Jueves 16 Mayo",
    calificacion: 5.0,
    foto: "https://github.com/shadcn.png",
  },
  {
    nombre: "Sophia Garcia",
    fecha: "Viernes 17 Mayo",
    calificacion: 4.5,
    foto: "https://github.com/sophiag.png",
  },
  {
    nombre: "Elena Martinez",
    fecha: "Martes 20 Mayo",
    calificacion: 3.7,
    foto: "https://github.com/elenam.png",
  },
  {
    nombre: "Luis Ramirez",
    fecha: "Miércoles 22 Mayo",
    calificacion: 4.8,
    foto: "https://github.com/luisr.png",
  },
  {
    nombre: "Emma Thompson",
    fecha: "Jueves 23 Mayo",
    calificacion: 4.2,
    foto: "https://github.com/emmat.png",
  },
  {
    nombre: "Carlos Sanchez",
    fecha: "Viernes 24 Mayo",
    calificacion: 3.9,
    foto: "https://github.com/carloss.png",
  },
  {
    nombre: "Lucía Lopez",
    fecha: "Lunes 27 Mayo",
    calificacion: 4.6,
    foto: "https://github.com/lucial.png",
  },
  {
    nombre: "Alejandro Perez",
    fecha: "Miércoles 29 Mayo",
    calificacion: 4.1,
    foto: "https://github.com/alejandrop.png",
  },
];

const EstudiantesHomeHistorialView: React.FC = () => {
  return (
    <Table>
      <TableCaption>
        Historial de calificaciones de los estudiantes.
      </TableCaption>
      <TableHeader>
        <TableRow className="text-base font-medium">
          <TableHead>Estudiante</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Calificación</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {estudiantes.map((estudiante, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <Avatar className="h-[50px] w-[50px] border-[2.2px] border-white shadow-md cursor-pointer">
                <AvatarImage
                  src={estudiante.foto}
                  alt={`Avatar de ${estudiante.nombre}`}
                />
                <AvatarFallback>{estudiante.nombre.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-base">{estudiante.nombre}</span>
            </TableCell>
            <TableCell className="text-base">{estudiante.fecha}</TableCell>
            <TableCell className="flex items-center  text-base">
              <div className="flex items-center">
                <StarIcon />
                <span className="ml-1">
                  {estudiante.calificacion.toFixed(1)}
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EstudiantesHomeHistorialView;
