import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import SearchInputContainer from '@/components/SearchInput/SearchInput.container';
import { useNavigate } from 'react-router-dom';

const UserHomeSearchView: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterActive, setFilterActive] = useState<{
        [key: string]: boolean;
    }>({
        skillsFilter: false,
        industryFilter: false,
        noneFilter: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (searchTerm.trim().length <= 1) return;

        console.log({ searchTerm });
        navigate(`/explorar/?q=${searchTerm}`);
    };

    return (
        <div className="flex space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center rounded-2xl bg-secondary px-4 py-3 space-x-2 cursor-pointer">
                    <span className="text-base font-medium">
                        {filterActive.noneFilter
                            ? 'Areas'
                            : filterActive.skillsFilter
                            ? 'Habilidades'
                            : 'Industria'}
                    </span>
                    <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-50 rounded-2xl py-4 px-3 space-y-1 drop-shadow-lg">
                    <DropdownMenuItem
                        onClick={() => {
                            setFilterActive({
                                skillsFilter: true,
                                industryFilter: false,
                                noneFilter: false,
                            });
                        }}
                        className="cursor-pointer"
                    >
                        Habilidades
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            setFilterActive({
                                skilsFilter: false,
                                industryFilter: true,
                                noneFilter: false,
                            });
                        }}
                        className="cursor-pointer"
                    >
                        Industria
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <SearchInputContainer
                onSubmit={handleSubmit}
                onChange={handleChange}
                searchTerm={searchTerm}
            />
        </div>
    );
};

export default UserHomeSearchView;
