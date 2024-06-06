import React from "react";

interface Props {
  size: number;
}

const Horario: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 9.23755C16.5 13.3775 13.14 16.7375 9 16.7375C4.86 16.7375 1.5 13.3775 1.5 9.23755C1.5 5.09755 4.86 1.73755 9 1.73755C13.14 1.73755 16.5 5.09755 16.5 9.23755Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7825 11.6226L9.45753 10.2351C9.05253 9.99512 8.72253 9.41762 8.72253 8.94512V5.87012"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 9.23755C16.5 13.3775 13.14 16.7375 9 16.7375C4.86 16.7375 1.5 13.3775 1.5 9.23755C1.5 5.09755 4.86 1.73755 9 1.73755C13.14 1.73755 16.5 5.09755 16.5 9.23755Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7825 11.6226L9.45753 10.2351C9.05253 9.99512 8.72253 9.41762 8.72253 8.94512V5.87012"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Horario;
