// TutoresHomeCard.view.tsx

import RayoCeleste from "../icons/RayoCeleste";
import Estrella from "../icons/Estrella";

const TutoresReseñasView: React.FC = ({}) => {
  return (
    <article
      className="w-full h-[184px] rounded-lg p-4"
      aria-labelledby="review-heading"
    >
      <header className="flex w-full justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <img
            src="https://img.freepik.com/premium-photo/photo-students-greeting-their-teacher-classroom-teacher-day-concept-generative-ai_742418-2059.jpg?w=826"
            alt="Perfil del estudiante"
            className="w-[48px] h-[48px] rounded-full"
          />
          <h2 id="review-heading" className="text-lg font-medium">
            Nombre estudiante
          </h2>
        </div>
        <div
          className="flex justify-center items-center"
          aria-label="Calificación"
        >
          <Estrella size={24} aria-hidden="true" />
          <span
            className="ml-1 font-normal text-base text-black"
            aria-live="polite"
          >
            4.7
          </span>
        </div>
      </header>
      <section className="mt-3 text-pretty">
        <time dateTime="2023-06-10" className="block text-[15px] mb-2">
          Fecha del comentario
        </time>
        <p className="text-[15px]">
          Comentario estudiante: Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Architecto, consequatur quia est alias commodi
          similique aliquid rem dignissimos maiores vitae placeat eaque totam
          voluptatum nemo laborum facere sequi consequuntur ea?
        </p>
      </section>
    </article>
  );
};

export default TutoresReseñasView;
