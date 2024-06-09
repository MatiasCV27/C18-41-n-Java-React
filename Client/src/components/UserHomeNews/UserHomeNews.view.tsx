import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Novedades from "../icons/Novedades";

interface NewsProps {
  icon: React.ReactNode;
  title: string;
}

const News: React.FC<NewsProps> = ({ icon, title }) => (
  <div className="flex items-center w-[259px] h-[57px] bg-white rounded-lg p-2">
    {icon}
    <div className="ml-4">
      <span className="text-md font-medium text-pretty">{title}</span>
    </div>
    <ChevronRight size={40} className="ml-4 text-muted" />
  </div>
);

const UserHomeNewsView: React.FC = () => {
  return (
    <Card className="w-full  bg-secondary rounded-lg max-w-full">
      <CardHeader>
        <CardTitle  className="text-xl">
          Novedades
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <News
            icon={<Novedades size={40} />}
            title="Nuevas clases que puedes tomar"
          />
          <News
            icon={<Novedades size={40} />}
            title="Scrum master, primer vistazo"
          />
          <News
            icon={<Novedades size={40} />}
            title="Herramientas para el diseño UI/UX"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center">
          <p className="cursor-pointer hover:underline">Ver más</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserHomeNewsView;

