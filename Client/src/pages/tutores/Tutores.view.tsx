import TutoresHomeContainer from "@/components/TutoresHome/TutoresHome.container";
import TutoresHomeCardContainer from "@/components/TutoresHomeCard/TutoresHomeCard.container";

const tutores = [
  { id: 1, nombre: "Juan", especialidad: "Frontend" },
  { id: 2, nombre: "María", especialidad: "Diseño UX/UI" },
  { id: 3, nombre: "Pedro", especialidad: "Matematicas" },
  { id: 4, nombre: "Luis", especialidad: "Backend" },
  { id: 5, nombre: "Ana", especialidad: "Diseño UX/UI" },
  { id: 6, nombre: "Carlos", especialidad: "Matematicas" },
];

const TutoresView = () => {
  return (
    <main className="flex flex-col space-y-[24px] w-full mx-auto pb-[24px]">
      <TutoresHomeContainer />
    </main>
  );
};

export default TutoresView;
