import React from 'react';

interface Props {
    size: number;
}

const Calendario: React.FC<Props> = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 1.90869V4.15869"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 1.90869V4.15869"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.625 7.22607H15.375"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15.75 6.78369V13.1587C15.75 15.4087 14.625 16.9087 12 16.9087H6C3.375 16.9087 2.25 15.4087 2.25 13.1587V6.78369C2.25 4.53369 3.375 3.03369 6 3.03369H12C14.625 3.03369 15.75 4.53369 15.75 6.78369Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.771 10.6836H11.7778"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.771 12.9336H11.7778"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.99661 10.6836H9.00335"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.99661 12.9336H9.00335"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.22073 10.6836H6.22747"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M6.22073 12.9336H6.22747"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Calendario;
