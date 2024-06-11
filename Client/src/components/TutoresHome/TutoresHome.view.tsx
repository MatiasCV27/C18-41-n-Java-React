import React from 'react';
import TutoresHomeCardContainer from '@/components/TutoresHomeCard/TutoresHomeCard.container';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const TutoresHomeView: React.FC = () => {
    const tutores = [
        {
            idTutor: 1,
            fullname: 'John Doe',
            skills: 'Matemáticas, Ciencias',
            exchangesMade: 10,
        },
        {
            idTutor: 2,
            fullname: 'Jane Smith',
            skills: 'Historia, Literatura',
            exchangesMade: 8,
        },
        {
            idTutor: 3,
            fullname: 'Bob Johnson',
            skills: 'Filosofía, Psicología',
            exchangesMade: 6,
        },
        {
            idTutor: 4,
            fullname: 'Sarah Davis',
            skills: 'Machine Learning',
            exchangesMade: 4,
        },
        {
            idTutor: 5,
            fullname: 'Mike Wilson',
            skills: 'Inglés, Español',
            exchangesMade: 2,
        },
        {
            idTutor: 6,
            fullname: 'Emily Chen',
            skills: 'Inglés,Español',
            exchangesMade: 1,
        },
        {
            idTutor: 7,
            fullname: 'Michael Brown',
            skills: 'Inglés, Español',
            exchangesMade: 0,
        },
    ];

    return (
        <div className="flex flex-col space-y-[24px] justify-start items-start">
            <h1 className="text-2xl font-bold text-black">Mis tutores</h1>
            <p className="text-pretty text-base text-black">
                Estos son los expertos que te han acompañado en tu proceso de
                aprendizaje
            </p>
            <TutoresHomeCardContainer tutores={tutores} />
            <div>
                <p className="text-pretty text-base text-black">
                    A seguir aprendiendo
                </p>
                <Button className="bg-muted text-white hover:bg-accent hover:text-white rounded-lg mt-2 shadow-md">
                    <span className="font-semibold">Buscar tutores</span>
                    <ArrowRight size={18} className="ml-4" />
                </Button>
            </div>
        </div>
    );
};

export default TutoresHomeView;
