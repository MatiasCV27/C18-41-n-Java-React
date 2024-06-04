import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchInputView: React.FC = () => {
    return (
        <div className="flex relative items-center space-x-2 rounded-2xl w-full">
            <Search className="absolute left-4  w-5 h-5 text-muted" />
            <Input
                type="search"
                placeholder="Buscar"
                className="flex-1 rounded-2xl border-0 pl-9 py-3 bg-white placeholder:italic text-base font-normal placeholder-zinc-500"
            />
        </div>
    );
};

export default SearchInputView;
