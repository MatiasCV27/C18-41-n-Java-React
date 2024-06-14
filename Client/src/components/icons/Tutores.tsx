/* import React from "react";

interface Props {
  size: number;
}

const Tutores: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.75C9.65279 2.75 7.75 4.65279 7.75 7C7.75 9.34721 9.65279 11.25 12 11.25C14.3472 11.25 16.25 9.34721 16.25 7C16.25 4.65279 14.3472 2.75 12 2.75ZM6.25 7C6.25 3.82436 8.82436 1.25 12 1.25C15.1756 1.25 17.75 3.82436 17.75 7C17.75 10.1756 15.1756 12.75 12 12.75C8.82436 12.75 6.25 10.1756 6.25 7Z"
        fill="#292D32"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.65991 22C2.65991 17.5791 6.99703 14.25 11.9999 14.25C17.0028 14.25 21.3399 17.5791 21.3399 22C21.3399 22.4142 21.0041 22.75 20.5899 22.75C20.1757 22.75 19.8399 22.4142 19.8399 22C19.8399 18.6809 16.477 15.75 11.9999 15.75C7.52278 15.75 4.15991 18.6809 4.15991 22C4.15991 22.4142 3.82413 22.75 3.40991 22.75C2.9957 22.75 2.65991 22.4142 2.65991 22Z"
        fill="#292D32"
      />
    </svg>
  );
};

export default Tutores;
 */

import React from "react";


const Tutores: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
};

export default Tutores;
