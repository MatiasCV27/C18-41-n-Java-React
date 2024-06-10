import React from 'react';
import TutoresHomeCardContainer from '@/components/TutoresHomeCard/TutoresHomeCard.container';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const TutoresHomeView: React.FC = () => {
  const tutores = [
    { id: 1, nombre: "John Doe", especialidad: ["Matemáticas", "Ciencias"], intercambiosExitosos: 10 },
    { id: 2, nombre: "Jane Smith", especialidad: ["Historia", "Literatura"], intercambiosExitosos: 8 },
    { id: 3, nombre: "Bob Johnson", especialidad: ["Filosofía", "Psicología"], intercambiosExitosos: 6 },
    { id: 4, nombre: "Sarah Davis", especialidad: ["Machine Learning"], intercambiosExitosos: 4 },
    { id: 5, nombre: "Mike Wilson", especialidad: ["Inglés", "Español"], intercambiosExitosos: 2 },
    { id: 6, nombre: "Emily Chen", especialidad: ["Inglés", "Español"], intercambiosExitosos: 1 },
    { id: 7, nombre: "Michael Brown", especialidad: ["Inglés", "Español"], intercambiosExitosos: 0 },
  ];
  
    return (
        <div className="flex flex-col space-y-[24px] justify-start items-start">
          <h1 className="text-2xl font-bold text-black">Mis tutores</h1>
          <p className="text-pretty text-base text-black">
            Estos son los expertos que te han acompañado en tu proceso de aprendizaje
          </p>
          <TutoresHomeCardContainer tutores={tutores} />
          <div>
          <p className="text-pretty text-base text-black">A seguir aprendiendo</p>
          <Button className="bg-muted text-white hover:bg-accent hover:text-white rounded-lg mt-2 shadow-md">
              <span className="font-semibold">Buscar tutores</span>
              <ArrowRight size={18} className="ml-4" />
            </Button>
          </div>
        </div>
    );
};

export default TutoresHomeView;
