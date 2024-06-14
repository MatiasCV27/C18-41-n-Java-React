/* import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendario31 from "@/components/icons/Calendario31";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "@/components/icons/Link";
import TutoresReseñasCardContainer from "../TutoresReseñas/TutoresReseñas.container";
import Medalla from "../icons/Medalla";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TABS = [
  { id: "general", label: "General" },
  { id: "reseñas", label: "Reseñas" },
];

const TutoresDetallesView: React.FC = () => {
  const { tutorId } = useParams<{ tutorId: string }>();
  const [activeTab, setActiveTab] = useState<string>("general");
  const [isLinkModalOpen, setLinkModalOpen] = useState(false);

  // Aca debemos llamar a la API mediante la Id para obtener la data del tutor seleccionado
  // O utilizarla desde un estado global
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
    reseñas: [
      {
        autor: "Juan Pérez",
        texto: "Excelente tutor, muy claro en sus explicaciones.",
        fecha: "10 de Junio de 2023",
      },
      {
        autor: "María García",
        texto: "Aprendí mucho, recomendado.",
        fecha: "15 de Mayo de 2023",
      },
      {
        autor: "Carlos López",
        texto: "Muy profesional y amable.",
        fecha: "20 de Abril de 2023",
      },
      {
        autor: "Ana Torres",
        texto: "Me ayudó a mejorar mis habilidades rápidamente.",
        fecha: "5 de Marzo de 2023",
      },
      {
        autor: "Jorge Martínez",
        texto: "Gran conocimiento y paciencia.",
        fecha: "28 de Febrero de 2023",
      },
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="flex flex-col space-y-4">
            <p className="text-base">{tutor.descripcion}</p>
            <div className="flex justify-between">
              <h2 className="font-bold text-black text-lg">Calendario</h2>
              <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4 hover:text-white">
                <Calendario31 size={24} />
                <span className="mx-4 text-[16px] font-bold">
                  Google Calendar
                </span>
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
            <div className="flex flex-col">
              <h2 className="font-bold text-black text-lg mb-4">Logros</h2>
              <div className="flex space-x-4 items-center">
                <Medalla size={30} />
                <span className="font-bold text-black text-lg">
                  +30 Sesiones de mentoria exitosas
                </span>
              </div>
            </div>
          </div>
        );
      case "reseñas":
        return (
          <>
            <p className="text-base mb-4">
              Conoce acerca de la experiencia que han tenido con {tutor.nombre}{" "}
              siendo tutor
            </p>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <TutoresReseñasCardContainer key={index} />
              ))}
          </>
        );
      default:
        return null;
    }
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
            <Button
              className="bg-secondary p-3 rounded-lg w-auto h-auto hover:bg-secondary border border-black"
              onClick={() => setLinkModalOpen(true)}
            >
              <Link size={24}/>
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full -translate-y-16 px-6">
        <div className="bg-white rounded-lg p-4">
          <div className="flex border-b-2 border-secondary pb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`font-bold text-lg mr-4 ${
                  activeTab === tab.id ? "text-secondary" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="pt-4">{renderContent()}</div>
        </div>
      </section>
      <Dialog open={isLinkModalOpen} onOpenChange={setLinkModalOpen}>
        <DialogContent>
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-center">Enlaces</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-start space-y-6">
            <div className="w-full flex flex-col items-start">
              <h2 className="text-xl font-semibold">Youtube</h2>
              <div className="flex items-center space-x-2 mt-2">
                <Link size={24} />
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800"
                >
                  https://www.youtube.com
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col items-start">
              <h2 className="text-xl font-semibold">Linkedin</h2>
              <div className="flex items-start space-x-2 mt-2">
                <Link size={24} />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800"
                >
                  https://www.linkedin.com
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default TutoresDetallesView;
 */

import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Calendario31 from "@/components/icons/Calendario31";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "@/components/icons/Link";
import TutoresReseñasCardContainer from "../TutoresReseñas/TutoresReseñas.container";
import Medalla from "../icons/Medalla";
import Estrella from "../icons/Estrella";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TABS = [
  { id: "general", label: "General" },
  { id: "reseñas", label: "Reseñas" },
];

const TutoresDetallesView: React.FC = () => {
  const { state } = useLocation();
  const { tutorId } = useParams<{ tutorId: string }>();
  const { idTutor, fullname, picture, skills, exchangesMade, score } =
    state || {};
  const [activeTab, setActiveTab] = useState<string>("general");
  const [isLinkModalOpen, setLinkModalOpen] = useState(false);

  // Lógica para obtener la data del tutor
  const tutor = {
    id: idTutor || parseInt(tutorId || "0"),
    nombre: fullname || "Andrea Soto",
    especialidad: skills || "Product design",
    intercambiosExitosos: exchangesMade || 36,
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
        fecha: "Coderhouse (2018 - 2019)",
      },
    ],
    rating: score || 4.5,
    reseñas: [
      {
        autor: "Juan Pérez",
        texto: "Excelente tutor, muy claro en sus explicaciones.",
        fecha: "10 de Junio de 2023",
      },
      {
        autor: "María García",
        texto: "Aprendí mucho, recomendado.",
        fecha: "15 de Mayo de 2023",
      },
      {
        autor: "Carlos López",
        texto: "Muy profesional y amable.",
        fecha: "20 de Abril de 2023",
      },
      {
        autor: "Ana Torres",
        texto: "Me ayudó a mejorar mis habilidades rápidamente.",
        fecha: "5 de Marzo de 2023",
      },
      {
        autor: "Jorge Martínez",
        texto: "Gran conocimiento y paciencia.",
        fecha: "28 de Febrero de 2023",
      },
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="flex flex-col space-y-4">
            <p className="text-base">{tutor.descripcion}</p>
            <div className="flex justify-between">
              <h2 className="font-bold text-black text-lg">Calendario</h2>
              <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4 hover:text-white">
                <Calendario31 size={24} />
                <span className="mx-4 text-[16px] font-bold">
                  Google Calendar
                </span>
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
            <div className="flex flex-col">
              <h2 className="font-bold text-black text-lg mb-4">Logros</h2>
              <div className="flex space-x-4 items-center">
                <Medalla size={30} />
                <span className="font-bold text-black text-lg">
                  +30 Sesiones de mentoria exitosas
                </span>
              </div>
            </div>
          </div>
        );
      case "reseñas":
        return (
          <>
            <p className="text-base mb-4">
              Conoce acerca de la experiencia que han tenido con {tutor.nombre}{" "}
              siendo tutor
            </p>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <TutoresReseñasCardContainer key={index} />
              ))}
          </>
        );
      default:
        return null;
    }
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
          src={picture || "https://via.placeholder.com/300"}
          alt="Perfil"
          className="w-[178px] h-[178px] rounded-full border-4 border-white"
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start justify-end ml-6 pb-4">
            <h1 className="font-bold text-black text-lg">{tutor.nombre}</h1>
            <p className="text-base">{tutor.especialidad}</p>
          </div>
          <div className="flex flex-col items-start justify-end mr-6 rounded-md p-4">
            <Button
              className="bg-secondary p-3 rounded-lg w-auto h-auto hover:bg-secondary border border-black"
              onClick={() => setLinkModalOpen(true)}
            >
              <Link size={24} />
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full -translate-y-16 px-6">
        <div className="bg-white rounded-lg p-4">
          <div className="flex border-b-2 border-secondary pb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`font-bold text-black text-lg mr-4 ${
                  activeTab === tab.id
                    ? "border-b-2 border-black"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-6">{renderContent()}</div>
        </div>
      </section>
      <Dialog
        open={isLinkModalOpen}
        onOpenChange={() => setLinkModalOpen(!isLinkModalOpen)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-start items-center">
              <span className="mr-2">Comparte el perfil de {tutor.nombre}</span>
              <Link size={24} />
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-start space-y-4">
            <span>https://www.platziretos.com/perfil/{tutor.id}</span>
            <Button
              className="bg-primary text-white rounded-lg py-2 px-4"
              onClick={() => setLinkModalOpen(false)}
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default TutoresDetallesView;
