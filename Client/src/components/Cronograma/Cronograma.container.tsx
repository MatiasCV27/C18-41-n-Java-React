import React from "react";
import CronogramaView from "./Cronograma.view";

const clases = [
  {
    dia: "Lu",
    hora: "9:00",
    nombre: "Fronted",
    clase: "Clase 3",
    img: "https://via.placeholder.com/40", 
  },
  {
    dia: "Mi",
    hora: "10:00",
    nombre: "Fronted",
    clase: "Clase 3",
    img: "https://via.placeholder.com/40", 
  },
  {
    dia: "Ju",
    hora: "14:00",
    nombre: "Fronted",
    clase: "Clase 3",
    img: "https://via.placeholder.com/40", 
  },
];

const CronogramaContainer: React.FC = () => {
  return <CronogramaView clases={clases} />;
};

export default CronogramaContainer;
