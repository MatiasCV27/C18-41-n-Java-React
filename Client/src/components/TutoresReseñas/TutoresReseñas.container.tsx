import { Separator } from "../ui/separator";
import TutoresReseñasView from "./TutoresReseñas.view";

const TutoresReseñasCardContainer: React.FC = ({}) => {
  return (
    <>
      <TutoresReseñasView />
      <Separator orientation="horizontal" className="w-full my-2"/>
    </>
  );
};

export default TutoresReseñasCardContainer;
