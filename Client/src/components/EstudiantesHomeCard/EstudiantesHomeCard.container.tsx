// EstudiantesHomeCard.container.tsx

import React, { useEffect, useState } from "react";
import EstudiantesHomeCardView from "./EstudiantesHomeCard.view";

const EstudiantesHomeCardContainer: React.FC = () => {
  const [userData, setUserData] = useState<any>(null); // Define un estado para almacenar toda la información del usuario

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        const data = await response.json();
        // Guarda toda la información del usuario, incluyendo la imagen del avatar
        setUserData(data.results[0]);
        console.log('Información completa del usuario:', data.results[0]); // Muestra toda la información en la consola
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <EstudiantesHomeCardView userData={userData} /> 
  );
};

export default EstudiantesHomeCardContainer;
