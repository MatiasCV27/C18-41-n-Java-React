import { FC } from 'react';

interface Props {
    tutores: Tutores[];
}

export interface Tutores {
    fullname: string;
    image: null;
    skills: string;
    industry: string;
    score: number;
    link: string;
    active: boolean;
}

const ExplorarView: FC<Props> = ({ tutores }) => {
    return (
        <main className="flex flex-col ">
            <code>{JSON.stringify(tutores)}</code>
        </main>
    );
};

export default ExplorarView;
