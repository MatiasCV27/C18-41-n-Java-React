// TutoresHomeCard.container.tsx

import React from 'react';
import TutoresHomeCardView from './TutoresHomeCard.view';

export interface Tutores {
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

interface TutoresHomeCardContainerProps {
    tutores: Tutores[];
}

const TutoresHomeCardContainer: React.FC<TutoresHomeCardContainerProps> = ({
    tutores,
}) => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
            {tutores.map((tutor) => (
                <TutoresHomeCardView
                    key={tutor.idTutor}
                    idTutor={tutor.idTutor}
                    fullname={tutor.fullname}
                    skills={tutor.skills}
                    exchangesMade={tutor.exchangesMade}
                    score={tutor.score}
                />
            ))}
        </main>
    );
};

export default TutoresHomeCardContainer;
