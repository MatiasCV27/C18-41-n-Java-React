// TutoresHomeView.tsx
import React, { useState, useEffect } from "react";
import TutoresHomeCardContainer from "@/components/TutoresHomeCard/TutoresHomeCard.container";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const TutoresHomeView: React.FC = () => {
  const [tutores, setTutores] = useState<any[]>([]);

  useEffect(() => {
    const fetchTutores = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        const data = await response.json();
        const skillsArray = [
          "JavaScript",
          "React",
          "Python",
          "HTML",
          "CSS",
          "TypeScript",
          "Node.js",
          "Angular",
          "Vue.js",
          "UI/UX Design",
          "DevOps",
          "GraphQL",
          "MongoDB",
          "SQL",
          "AWS",
          "Docker",
          "Machine Learning",
          "Cybersecurity",
          "Blockchain",
          "API Development",
        ];

        const formattedTutores = data.results.map(
          (result: any, index: number) => {
            // Generar dos habilidades al azar del array
            const randomSkills = getRandomSkills(skillsArray, 2);

            return {
              idTutor: index + 1,
              fullname: `${result.name.first} ${result.name.last}`,
              skills: randomSkills.join(", "), // Convertir array en string separado por comas
              exchangesMade: index, // Ajustar según necesidades
              picture: result.picture.large, // URL de la imagen del tutor
              score: Math.floor(Math.random() * 5) + 1, // Puntuación aleatoria para ejemplo
            };
          }
        );

        setTutores(formattedTutores);
      } catch (error) {
        console.error("Error al obtener tutores:", error);
      }
    };

    fetchTutores();
  }, []);

  // Función para obtener habilidades al azar del array
  const getRandomSkills = (skillsArray: string[], count: number): string[] => {
    const shuffled = skillsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="flex flex-col space-y-[24px] justify-start items-start">
      <h1 className="text-2xl font-bold text-black">Mis tutores</h1>
      <p className="text-pretty text-base text-black">
        Estos son los expertos que te han acompañado en tu proceso de
        aprendizaje
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
