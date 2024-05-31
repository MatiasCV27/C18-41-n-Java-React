import React from 'react';
import Book from '../../assets/bookBanner.png';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';


const UserHomeBannerView: React.FC = ({ name }) => {
  return (
    <div className="w-full h-auto bg-muted relative rounded-lg overflow-hidden">
      <div className="w-2/3 flex flex-col justify-center items-start p-6 z-10">
        <h1 className="text-3xl font-bold mb-2 text-accent z-10">
          {name ? `Hola, ${name}` : 'Hola Usuario'}
        </h1>
        <p className="text-xl text-white text-pretty mb-4 z-10">
          Bienvenido, activa tu agenda para impartir clases Quiero ser tutor
        </p>
        <Button className="bg-white text-black hover:bg-white border border-muted rounded-lg mt-8 z-10 hover:translate-x-1 transition-transform">
          <span className="flex items-center ">
            Quiero ser tutor <ArrowRight size={18} className="ml-4" />
          </span>
        </Button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full absolute -bottom-16 z-0 rounded-lg" 
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,181.3C672,181,768,107,864,69.3C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <img src={Book} alt="Books" className="absolute right-10 bottom-5 z-10" />
    </div>
  );

};

export default UserHomeBannerView;
