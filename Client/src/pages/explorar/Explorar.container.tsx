import { useLoaderData } from 'react-router-dom';

import { getTutors } from '@/utils/Search/getTutors.utils';
import ExplorarView from './Explorar.view';

interface Filter {
    skills?: string;
    industry?: string;
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

const ExplorarContainer = () => {
    const data = useLoaderData();
    console.log(data);

    const tutores = data as Tutores[];
    return (
        <>
            <ExplorarView tutores={tutores} />
        </>
    );
};

export default ExplorarContainer;

/**
 * Esta funcion la utilizo en las rutas para cargar la informacion
 * antes de que se renderice el componente.
 *
 * @param {Filter} query - The query object to filter the tutors.
 * @return {Promise<Tutor[]>} A promise that resolves to an array of tutors.
 */
export const dataLoader = async (query: Filter) => {
    const getTutorsFromApi = async (query: any) => {
        try {
            const tutors = await getTutors(query);
            return tutors;
        } catch (error) {
            console.log(error);
        }
    };

    const data = await getTutorsFromApi(query);
    if (!data) return [];
    return await data;
};
