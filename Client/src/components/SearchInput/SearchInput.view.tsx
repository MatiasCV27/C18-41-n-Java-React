import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Props {
    onSubmit: (event: React.FormEvent) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    searchTerm: string;
}

const SearchInputView: React.FC<Props> = ({
    onSubmit,
    onChange,
    searchTerm,
}) => {
    return (
        <div className="w-full">
            <form
                className="flex relative items-center space-x-2 w-full"
                onSubmit={onSubmit}
            >
                <Search
                    className="absolute left-4  w-5 h-5 text-muted cursor-pointer"
                    onClick={onSubmit}
                />
                <Input
                    type="search"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={onChange}
                    className="flex-1 rounded-2xl border-0 pl-9 py-3 h-12 bg-white placeholder:italic text-base font-normal placeholder-zinc-500"
                />
            </form>
        </div>
    );
};

export default SearchInputView;
