// TutoresHomeCard.container.tsx

import React, { useState } from 'react';
import TutoresHoverCardView from './TutoresHoverCard.view';
import { ModalRequest } from '../ModalRequest/RequestModal';
import { MeetingsForStudentesController } from '@/controllers/meetingsForStudents/meetingsForStudents.controller';

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
    username?: string;
}

interface TutoresHomeCardContainerProps {
    tutores: Tutores[];
}

const meetingsForStudentsController = new MeetingsForStudentesController();
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
        username: '',
    });

    const resetForm = () => {
        setRequestModalValues({
            idTutor: null,
            start: '',
            end: '',
            message: '',
            date: '',
            username: '',
        });
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setRequestModalValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const { idTutor, start, end, message, date } = requestModalValues;
        const requestValues = {
            message: message,
            schedule: date,
            startDate: start,
            endDate: end,
        };

        console.log({ requestModalValues });
        if (!idTutor) {
            console.log('id de tutor vacio');
            return;
        }

        try {
            await meetingsForStudentsController.sendMeetingRequest(
                requestValues,
                idTutor
            );
            console.log('Solicitud enviada');
        } catch (error) {
            console.log({ error });
        }

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
                        username={tutor.username}
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
