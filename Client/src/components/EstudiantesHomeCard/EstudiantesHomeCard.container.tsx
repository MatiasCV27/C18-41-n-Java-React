// EstudiantesHomeCard.container.tsx

import React, { useEffect, useState } from "react";
import EstudiantesHomeCardView from "./EstudiantesHomeCard.view";

const EstudiantesHomeCardContainer: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        const data = await response.json();
        const imageUrl = data.results[0]?.picture?.large;
        if (!imageUrl) {
          throw new Error('URL del avatar no encontrada en los datos recibidos');
        }
        setAvatarUrl(imageUrl);
      } catch (error) {
        console.error('Error al obtener avatar:', error);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <EstudiantesHomeCardView avatarUrl={avatarUrl} />
  );
};

export default EstudiantesHomeCardContainer;
