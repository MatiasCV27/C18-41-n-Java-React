// Menubar.view.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui";
import Home from "@/components/icons/Home";
import Estudiantes from "@/components/icons/Estudiantes";
import { CalendarCheck, ArrowRight } from "lucide-react";
import Explorar from "../icons/Explorar";
import Guardados from "../icons/Guardados";
import Recursos from "../icons/Recursos";
import Tutores from "../icons/Tutores";

const MenubarView: React.FC = () => {
  const menuItems = [
    { name: "Inicio", path: "/inicio", icon: <Home size={24} /> },
    {
      name: "Estudiantes",
      path: "/estudiantes",
      icon: <Estudiantes size={24} />,
    },
    { name: "Tutores", path: "/tutores", icon: <Tutores size={24} /> },
    { name: "Explorar", path: "/explorar", icon: <Explorar size={24} /> },
    { name: "Recursos", path: "/recursos", icon: <Recursos size={24} /> },
    { name: "Guardado", path: "/guardado", icon: <Guardados size={24} /> },
    {
      name: "Evaluaciones",
      path: "/evaluaciones",
      icon: <CalendarCheck />,
    },
  ];

  return (
    <div className="flex fixed top-24 flex-col w-80 mx-6 h-screen">
      <div className="bg-accent text-black p-4 rounded-lg flex flex-col h-[calc(100vh-118px)]">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg ${
                    isActive
                      ? "bg-accent-foreground text-white"
                      : "text-black hover:bg-accent-foreground hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span className="ml-4 text-base leading-6 font-medium">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="text-black hover:underline text-sm font-normal">
            Obtén más puntos para canjear en clases y mucho más
          </p>
          <Button
            variant="default"
            className="bg-accent-foreground rounded-lg mt-2"
          >
            Actualizar <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenubarView;
