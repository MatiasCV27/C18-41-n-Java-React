import TutoresHoverCardContainer from '@/components/TutoresHoverCard/TutoresHoverCard.container';
import { FC } from 'react';

interface Props {
    tutores: Tutores[];
}

export interface Tutores {
    idTutor: number;
    fullname: string;
    image: null;
    industry: string;
    skills: string;
    score: number;
    exchangesMade: number;
    active: boolean;
    link_calendar: string;
    meetings: null;
    reviews: null;
}

const ExplorarView: FC<Props> = ({ tutores }) => {
    return (
        <main className="flex flex-col ">
            {/* <code>{JSON.stringify(tutores)}</code> */}

            <div className="flex flex-col space-y-[24px] justify-start items-start">
                <h1 className="text-2xl font-bold text-black">Tutores</h1>
                <TutoresHoverCardContainer tutores={tutores} />
            </div>
        </main>
    );
};

export default ExplorarView;
