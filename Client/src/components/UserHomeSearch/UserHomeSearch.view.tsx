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
    <div className="flex space-x-4 mb-[24px]">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 p-2 cursor-pointer">
          <span>Áreas</span>
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
