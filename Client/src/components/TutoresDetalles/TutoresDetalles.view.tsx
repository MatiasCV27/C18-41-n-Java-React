import React from "react";
import { useParams } from "react-router-dom";
import Calendario31 from "@/components/icons/Calendario31";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "@/components/icons/Link";

const TutoresDetallesView: React.FC = () => {
  const { tutorId } = useParams<{ tutorId: string }>();

  // Aca debemos llamar a la API mediante la Id para obtener la data del tutor seleccionado
  const tutor = {
    id: parseInt(tutorId || "0"),
    nombre: "Andrea Soto",
    especialidad: "Product design",
    intercambiosExitosos: 36,
    descripcion:
      "Hola a todos! Soy Rodrigo Pérez, desarrollador de software freelance en constante búsqueda de nuevas formas de crecer en mi área. Mis metas incluyen aprender sobre desarrollo de aplicaciones móviles para expandir mis habilidades y servicios.",
    idiomas: ["Español", "Inglés", "Mandarín"],
    industria: ["Diseño de producto", "UX & UI", "Tecnología"],
    experiencia: [
      {
        nombre: "Product designer",
        fecha: "Octubre 2022 - Presente",
      },
      {
        nombre: "UX & UI",
        fecha: "Enero 2019 - Marzo 2022",
      },
    ],
    educacion: [
      {
        nombre: "Diseñadora gráfica",
        fecha: "UBA (2013 - 2018)",
      },
      {
        nombre: "Curso de UX & UI",
        fecha: "Coderhouse (2018)",
      },
      {
        nombre: "Curso de Product manager",
        fecha: "Coderhouse (2018)",
      },
    ],
  };

  return (
    <main className="flex flex-col">
      <section className="w-full">
        <img
          src="https://img.freepik.com/free-photo/still-life-graphic-design-studio_23-2151320701.jpg?t=st=1717968916~exp=1717972516~hmac=e114e6c93f06c9544e0e2f72097956ec4d48c29e66bb4b25940447238274d038&w=1060"
          alt="Banner"
          className="w-full h-[205px] object-cover rounded-lg"
        />
      </section>
      <section className="w-full flex justify-start -translate-y-20 translate-x-6 ">
        <img
          src="https://img.freepik.com/premium-photo/photo-female-teacher-celebrating-happy-teacher-s-day-with-her-students-generative-ai_742418-2061.jpg?w=826"
          alt="Perfil"
          className="w-[178px] h-[178px] rounded-full border-4 border-white"
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start justify-end ml-6 pb-4">
            <h1 className="font-bold text-black text-lg">{tutor.nombre}</h1>
            <p className="text-base">{tutor.especialidad}</p>
          </div>
          <div className="flex flex-col items-start justify-end mr-6 rounded-md p-4">
            <Button className="bg-secondary p-3 rounded-lg w-auto h-auto hover:bg-secondary ">
              <Link size={24} />
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full px-4 bg-white rounded-lg justify-start space-y-2">
        <div className="flex space-x-4">
          <h2 className="font-bold text-black text-lg">General</h2>
          <h2 className="font-bold text-black text-lg">Reseñas</h2>
        </div>
        <p className="text-base">{tutor.descripcion}</p>

        <div className="flex justify-between">
          <h2 className="font-bold text-black text-lg">Calendario</h2>
          <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4 hover:text-white">
            <Calendario31 size={24} />
            <span className="mx-4 text-[16px] font-bold">Google Calendar</span>
            <ChevronRight size={24} />
          </Button>
        </div>

        <div className="font-normal text-base flex justify-between">
          <h2 className="font-bold text-black text-lg">Idiomas</h2>
          <ul className="flex space-x-4 list-none">
            {tutor.idiomas.map((idioma, index) => (
              <li
                key={index}
                className="border-2 border-black rounded-lg py-1 px-2"
              >
                {idioma}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-normal text-base flex justify-between">
          <h2 className="font-bold text-black text-lg">Industria</h2>
          <ul className="flex space-x-4 list-none">
            {tutor.industria.map((ind, index) => (
              <li
                key={index}
                className="border-2 border-black rounded-lg py-1 px-2"
              >
                {ind}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-black text-lg mb-4">Experiencia</h2>
          <ul className="ml-4 space-y-4">
            {tutor.experiencia.map((exp, index) => (
              <li key={index}>
                <div className="flex justify-between">
                  <span className="font-normal">{exp.nombre}</span>
                  <span className="border-2 border-black rounded-lg font-normal py-1 px-2">
                    {exp.fecha}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-black text-lg mb-4">Educación</h2>
          <ul className="ml-4 space-y-4">
            {tutor.educacion.map((edu, index) => (
              <li key={index}>
                <div className="flex justify-between ">
                  <span className="font-normal">{edu.nombre}</span>
                  <span className="border-2 border-black rounded-lg font-normal py-1 px-2">
                    {edu.fecha}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TutoresDetallesView;
