import { useLocation } from 'react-router-dom';
import queryStrring from 'query-string';
import ExplorarView from './Explorar.view';
import { getTutorsByFilter } from '@/utils/Search/getTutorsByFilter.utils';
import { getAllTutors } from '@/utils/Search/getAllTutors.utils';

const ExplorarContainer = () => {
    const location = useLocation();
    const query = queryStrring.parse(location.search);

    if (Object.keys(query).length === 0) {
        getAllTutors();
    } else {
        getTutorsByFilter(query);
    }

    return (
        <>
            <ExplorarView />
        </>
    );
};

export default ExplorarContainer;
