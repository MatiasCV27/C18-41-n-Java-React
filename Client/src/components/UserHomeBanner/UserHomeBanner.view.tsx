import React from "react";
import Book from "../../assets/bookBanner.png";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const UserHomeBannerView: React.FC = () => {
  return (
      <div className="w-full h-[264px] bg-muted relative rounded-lg">
        <div className="w-2/3 flex flex-col justify-center items-start p-6 z-10 ">
          <h1 className="text-3xl font-bold mb-2 text-accent">
            ¡Hola, Usuario!
          </h1>
          <p className="text-xl text-white text-pretty mb-4 z-10">
            Bienvenido, activa tu agenda para impartir clases Quiero ser tutor
          </p>
          <Button className="bg-white text-black hover:bg-white border border-muted rounded-lg mt-8 z-10 hover:translate-x-1 transition-transform">
            <span className="flex items-center">
              Quiero ser tutor <ArrowRight className="ml-2 h-6 w-6" />
            </span>
          </Button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full absolute bottom-0 z-0 rounded-lg"
        >
          <path
            fill="#60DAFF"
            fillOpacity="1"
            d="M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,90.7C672,43,768,21,864,16C960,11,1056,21,1152,26.7C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <img src={Book} alt="Books" className="absolute right-0 bottom-0 z-10" />
      </div>
  );
};

export default UserHomeBannerView;
