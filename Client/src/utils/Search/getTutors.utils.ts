import { getAllTutors } from './getAllTutors.utils';
import { getTutorsByFilter } from './getTutorsByFilter.utils';

interface Filter {
    skills?: string;
    industry?: string;
}

export const getTutors = async (query: Filter) => {
    if (Object.keys(query).length === 0) {
        return await getAllTutors();
    } else {
        return await getTutorsByFilter(query);
    }
};
