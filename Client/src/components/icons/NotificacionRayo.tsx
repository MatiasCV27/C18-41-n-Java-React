import React from "react";

interface Props {
  size: number;
}

const NotificacionRayo: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4113 41.04C33.0774 41.04 41.724 32.5365 41.724 22.047C41.724 11.5574 33.0774 3.05395 22.4113 3.05395C11.7452 3.05395 3.09863 11.5574 3.09863 22.047C3.09863 32.5365 11.7452 41.04 22.4113 41.04Z"
        fill="white"
        stroke="#292D32"
        strokeWidth="2.64545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9996 21.8759L19.1862 22.6545L17.3516 29.948C16.9267 31.6574 17.7764 32.227 19.2442 31.2204L29.2482 24.402C30.4649 23.5663 30.291 22.5976 28.8426 22.2367L25.656 21.4581L27.4907 14.1647C27.9156 12.4553 27.0658 11.8856 25.5981 12.8922L15.5941 19.7107C14.3774 20.5464 14.5512 21.515 15.9996 21.8759Z"
        fill="#2FC5F4"
        stroke="#292D32"
        strokeWidth="2.64545"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificacionRayo;
