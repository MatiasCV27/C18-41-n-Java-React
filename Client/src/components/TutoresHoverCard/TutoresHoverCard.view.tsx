// TutoresHomeCard.view.tsx

import React from 'react';
import user from '../../assets/usersiu.png';
import { useNavigate } from 'react-router-dom';
import Maletin from '../icons/Maletin';
import RayoCeleste from '../icons/RayoCeleste';
import Estrella from '../icons/Estrella';
import { Button } from '../ui';

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
    username?: string;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    setRequestModalValues: React.Dispatch<React.SetStateAction<any>>;
}

const TutoresHoverCardView: React.FC<TutoresHomeCardViewProps> = ({
    idTutor,
    fullname,
    skills,
    exchangesMade,
    score,
    username,
    setModalState,
    setRequestModalValues,
}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/tutores/${idTutor}`);
    };

    return (
        <div className="w-[212px] h-full rounded-2xl container cursor-pointer bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-4">
                <div className="relative overflow-visible group/item">
                    <img
                        src={user}
                        alt="Card Image"
                        className="w-[182px] h-auto rounded-lg z-10 transition-all duration-500 group-hover/item:blur-sm"
                    />
                    <div className="absolute inset-0 z-30  items-center justify-center gap-2 group-hover/item:flex group-hover/item:flex-col invisible group-hover/item:visible  group-hover/item:scale-110">
                        <Button
                            onClick={() => {
                                setModalState(true);
                                setRequestModalValues((prevState: any) => ({
                                    ...prevState,
                                    idTutor: idTutor,
                                    username: username,
                                }));
                            }}
                            variant="secondary"
                        >
                            Aprender
                        </Button>
                        <Button onClick={handleCardClick} variant="secondary">
                            Ver Perfil
                        </Button>
                    </div>
                </div>

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

export default TutoresHoverCardView;
