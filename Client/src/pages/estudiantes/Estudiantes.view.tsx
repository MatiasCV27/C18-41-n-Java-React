// EstudiantesView.tsx

import EstudiantesHomeContainer from "@/components/EstudiantesHome/EstudiantesHome.container";
import SearchInputContainer from "@/components/SearchInput/SearchInput.container";
const EstudiantesView = () => {
  return (
    <main className="flex flex-col space-y-[24px] w-auto lg:w-[476px] xl:w-[683px] 2xl:w-[1174px] mx-auto">
      <SearchInputContainer />
      <EstudiantesHomeContainer />
    </main>
  );
};

export default EstudiantesView;
