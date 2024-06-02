import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import SearchInputContainer from "@/components/SearchInput/SearchInput.container";

const UserHomeSearchView: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <DropdownMenu >
        <DropdownMenuTrigger className="flex items-center rounded-2xl bg-secondary px-4 py-3 space-x-2 cursor-pointer">
          <span className="text-base font-medium">Áreas</span>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <SearchInputContainer />
    </div>
  );
};

export default UserHomeSearchView;
