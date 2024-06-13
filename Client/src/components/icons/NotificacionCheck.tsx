import React from "react";

interface Props {
  size: number;
}

const NotificacionCheck: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.0821 7.15351C34.955 7.47096 37.9002 9.64023 37.9002 17.7001V28.2819C37.9002 35.3364 36.1366 38.8637 27.3184 38.8637H16.7366C7.91842 38.8637 6.15479 35.3364 6.15479 28.2819V17.7001C6.15479 9.65787 9.10006 7.47096 14.973 7.15351"
        fill="#F4F1FA"
        stroke="#292D32"
        strokeWidth="2.64545"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5004 10.6457H25.555C29.0822 10.6457 29.0822 8.88207 29.0822 7.11843C29.0822 3.59116 27.3186 3.59116 25.555 3.59116H18.5004C16.7368 3.59116 14.9731 3.59116 14.9731 7.11843C14.9731 10.6457 16.7368 10.6457 18.5004 10.6457Z"
        fill="#2FC5F4"
        stroke="#292D32"
        strokeWidth="2.64545"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2832 25.9893L19.9287 28.6347L26.9832 21.5802"
        stroke="black"
        strokeWidth="2.64545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificacionCheck;
