import React from "react";

interface Props {
  size: number;
}

const RayoCeleste: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7656 19.1855C15.8054 19.1855 19.891 15.1676 19.891 10.2112C19.891 5.25477 15.8054 1.23682 10.7656 1.23682C5.72573 1.23682 1.64014 5.25477 1.64014 10.2112C1.64014 15.1676 5.72573 19.1855 10.7656 19.1855Z"
        fill="#2FC5F4"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.73573 10.1303L9.24142 10.4983L8.37452 13.9445C8.17376 14.7522 8.57526 15.0214 9.2688 14.5457L13.9958 11.3239C14.5707 10.9291 14.4885 10.4714 13.8041 10.3009L12.2984 9.93293L13.1654 6.48675C13.3661 5.67906 12.9646 5.40984 12.2711 5.88549L7.54411 9.10731C6.96921 9.50218 7.05133 9.95983 7.73573 10.1303Z"
        fill="#F4F1FA"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RayoCeleste;
