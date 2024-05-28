import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  UserRound,
  Users,
  FolderHeart,
  CalendarCheck,
  BookmarkCheck,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui";

const MenubarView: React.FC = () => {
  const menuItems = [
    { name: "Inicio", path: "/inicio", icon: <Home /> },
    { name: "Estudiantes", path: "/estudiantes", icon: <UserRound /> },
    { name: "Tutores", path: "/tutores", icon: <Users /> },
    { name: "Explorar", path: "/explorar", icon: <Globe /> },
    { name: "Recursos", path: "/recursos", icon: <FolderHeart /> },
    { name: "Guardado", path: "/guardado", icon: <BookmarkCheck /> },
    { name: "Evaluaciones", path: "/evaluaciones", icon: <CalendarCheck /> },
  ];

  return (
    <div className="fixed top-6 bottom-6 left-6 right-6 flex flex-col space-y-4 w-[316px]">
      <h1 className="text-3xl font-bold mb-2 ml-2 tracking-wide bg-transparent">
        <span className="text-blue-500">Swap</span> It Up
      </h1>
      <div className="bg-accent text-black p-4 rounded-lg flex flex-col h-full overflow-y-auto">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 hover:bg-accent-foreground text-black hover:text-white rounded-lg"
              >
                {item.icon}
                <span className="ml-4 text-lg font-semibold">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="text-black hover:underline">
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
