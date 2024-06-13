// TutoresHomeCard.container.tsx

import React, { useState } from 'react';
import TutoresHoverCardView from './TutoresHoverCard.view';
import { ModalRequest } from '../ModalRequest/RequestModal';

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

const TutoresHoverCardContainer: React.FC<TutoresHomeCardContainerProps> = ({
    tutores,
}) => {
    const [modalState, setModalState] = useState(false);
    const [requestModalValues, setRequestModalValues] = useState({
        idTutor: null,
        start: '',
        end: '',
        message: '',
        date: '',
    });

    const resetForm = () => {
        setRequestModalValues({
            idTutor: null,
            start: '',
            end: '',
            message: '',
            date: '',
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRequestModalValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        console.log({ requestModalValues });

        resetForm();

        setModalState(false);
    };

    return (
        <>
            <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
                {tutores.map((tutor) => (
                    <TutoresHoverCardView
                        key={tutor.idTutor}
                        idTutor={tutor.idTutor}
                        fullname={tutor.fullname}
                        skills={tutor.skills}
                        exchangesMade={tutor.exchangesMade}
                        score={tutor.score}
                        setModalState={setModalState}
                        setRequestModalValues={setRequestModalValues}
                    />
                ))}
            </main>
            <ModalRequest
                isModalOpen={modalState}
                onClose={setModalState}
                requestModalValues={requestModalValues}
                onChange={handleInputChange}
                onSubmit={handleSubmit}
                onReset={resetForm}
            />
        </>
    );
};

export default TutoresHoverCardContainer;
