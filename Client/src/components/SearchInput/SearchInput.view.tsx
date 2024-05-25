import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInputView: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <Search className="w-5 h-5 text-muted" />
      <Input type="search" placeholder="Buscar en la app" className="flex-1" />
    </div>
  );
};

export default SearchInputView;
