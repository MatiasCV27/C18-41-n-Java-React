import { useNavigate } from 'react-router-dom';
import UserHomeSearchView from './UserHomeSearch.view';
import { useState } from 'react';

const UserHomeSearchContainer = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterActive, setFilterActive] = useState<{
        [key: string]: boolean;
    }>({
        skillsFilter: true,
        industryFilter: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (searchTerm.trim().length <= 1) return;

        console.log({ searchTerm });
        navigate(
            `/explorar/?${
                filterActive.skillsFilter
                    ? `skills=${searchTerm}`
                    : `industry=${searchTerm}`
            }`
        );
    };

    return (
        <>
            <UserHomeSearchView
                filterActive={filterActive}
                setFilterActive={setFilterActive}
                searchTerm={searchTerm}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default UserHomeSearchContainer;
