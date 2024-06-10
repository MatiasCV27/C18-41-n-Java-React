import React from 'react';
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

interface Props {
    setFilterActive: any;
    filterActive: any;
    searchTerm: string;
    onSubmit: (event: React.FormEvent) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserHomeSearchView: React.FC<Props> = ({
    setFilterActive,
    filterActive,
    onSubmit,
    searchTerm,
    onChange,
}) => {
    return (
        <div className="flex space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center rounded-2xl bg-secondary px-4 py-3 space-x-2 cursor-pointer">
                    <span className="text-base font-medium">
                        {filterActive.skillsFilter
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
                            });
                        }}
                        className="cursor-pointer"
                    >
                        Industria
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <SearchInputContainer
                onSubmit={onSubmit}
                onChange={onChange}
                searchTerm={searchTerm}
            />
        </div>
    );
};

export default UserHomeSearchView;
