import React from "react";

interface Props {
  size: number;
}

const Link: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0601 10.9707C15.3101 13.2207 15.3101 16.8607 13.0601 19.1007C10.8101 21.3407 7.17009 21.3507 4.93009 19.1007C2.69009 16.8507 2.68009 13.2107 4.93009 10.9707"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.59 13.4406C8.24996 11.1006 8.24996 7.30065 10.59 4.95065C12.93 2.60065 16.73 2.61065 19.08 4.95065C21.43 7.29065 21.42 11.0906 19.08 13.4406"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Link;
