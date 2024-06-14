import React from "react";

interface Props {
  size: number;
}

const Novedades: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 8.39001L10.9301 10.25C10.6901 10.66 10.8901 11 11.3601 11H12.6301C13.1101 11 13.3001 11.34 13.0601 11.75L12.0001 13.61"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.30011 18.54V17.38C6.00011 15.99 4.11011 13.28 4.11011 10.4C4.11011 5.44999 8.66011 1.56999 13.8001 2.68999C16.0601 3.18999 18.0401 4.68999 19.0701 6.75999C21.1601 10.96 18.9601 15.42 15.7301 17.37V18.53C15.7301 18.82 15.8401 19.49 14.7701 19.49H9.26011C8.16011 19.5 8.30011 19.07 8.30011 18.54Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 22.5C10.79 21.85 13.21 21.85 15.5 22.5"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Novedades;
