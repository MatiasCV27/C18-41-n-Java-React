// TutoresHomeCard.view.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Maletin from '../icons/Maletin';
import RayoCeleste from '../icons/RayoCeleste';
import Estrella from '../icons/Estrella';

export interface TutoresHomeCardViewProps {
    idTutor?: number;
    fullname?: string;
    image?: null;
    industry?: string;
    skills?: string;
    score?: number;
    exchangesMade?: number;
    active?: boolean;
    link_calendar?: string;
    meetings?: null;
    reviews?: null;
}

const TutoresHomeCardView: React.FC<TutoresHomeCardViewProps> = ({
    idTutor,
    fullname,
    skills,
    exchangesMade,
    score,
}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/tutores/${idTutor}`);
    };

    return (
        <div
            className="w-[212px] h-full rounded-2xl container cursor-pointer bg-white p-4 shadow-lg"
            onClick={handleCardClick}
        >
            <div className="flex flex-col gap-4">
                <img
                    src="https://img.freepik.com/premium-photo/photo-students-greeting-their-teacher-classroom-teacher-day-concept-generative-ai_742418-2059.jpg?w=826"
                    alt="Card Image"
                    className="w-[182px] h-auto rounded-lg"
                />
                <div className="flex flex-col items-start justify-between gap-2">
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-base font-medium text-muted leading-6">
                            {fullname}
                        </h2>
                        <span className="flex items-center text-base font-medium text-muted leading-6">
                            {score}
                            <Estrella size={14} />
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Maletin size={24} />
                        <span className="ml-2 text-xs font-normal">
                            {skills}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <RayoCeleste size={24} />
                        <span className="ml-2 text-xs font-normal">
                            {exchangesMade} Intercambios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutoresHomeCardView;
