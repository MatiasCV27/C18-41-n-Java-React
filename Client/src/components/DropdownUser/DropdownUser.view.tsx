import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavLink } from 'react-router-dom';
import {
    CalendarDays,
    CircleHelp,
    LogOut,
    Settings,
    UserRoundCog,
} from 'lucide-react';

interface Props {
    name: string | undefined;
    lastname: string | undefined;
    onLogout: () => void;
}

const DropdownUserView: React.FC<Props> = ({ onLogout, name, lastname }) => {
    return (
        <>
            <div className="flex items-center space-x-2 relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="h-[50px] w-[50px] border-[2.2px] border-white shadow-md cursor-pointer">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="Avatar de usuario"
                            />
                            <AvatarFallback>Usuario</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 rounded-3xl px-4 py-6 absolute -right-11 -top-16 drop-shadow-lg">
                        <DropdownMenuLabel>
                            <div className="flex items-center gap-2.5 mb-6 ">
                                <Avatar className="h-[50px] w-[50px] border-[2.2px] border-white drop-shadow-md">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="Avatar de usuario"
                                    />
                                    <AvatarFallback>Usuario</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium">
                                        {`${name ? name : 'name'} ${
                                            lastname ? lastname : 'lastname'
                                        }`}
                                    </span>
                                    <span className="text-xs font-light">
                                        Desarrollador de Software
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuGroup className="space-y-1.5">
                            <NavLink to="/">
                                <DropdownMenuItem className="p-3 cursor-pointer">
                                    <div className="flex items-center gap-2.5">
                                        <UserRoundCog size={24} />
                                        <p className="text-base font-normal">
                                            Ver mi perfil
                                        </p>
                                    </div>
                                </DropdownMenuItem>
                            </NavLink>
                            <DropdownMenuItem className="p-3 cursor-pointer">
                                <div className="flex items-center gap-2.5">
                                    <CalendarDays size={24} />
                                    <p className="text-base font-normal">
                                        Conecta tu calendario
                                    </p>
                                </div>
                            </DropdownMenuItem>
                            <NavLink to="/configurar-perfil">
                                <DropdownMenuItem className="p-3 cursor-pointer">
                                    <div className="flex items-center gap-2.5">
                                        <Settings size={24} />
                                        <p className="text-base font-normal">
                                            Configuración
                                        </p>
                                    </div>
                                </DropdownMenuItem>
                            </NavLink>
                            <DropdownMenuItem className="p-3 cursor-pointer">
                                <div className="flex items-center gap-2.5">
                                    <CircleHelp size={24} />
                                    <p className="text-base font-normal">
                                        Soporte
                                    </p>
                                </div>
                            </DropdownMenuItem>

                            <NavLink onClick={onLogout} to="/signin">
                                <DropdownMenuItem className="text-red-600 p-3 cursor-pointer">
                                    <div className="flex items-center gap-2.5">
                                        <LogOut size={24} />
                                        Cerrar sesión
                                    </div>
                                </DropdownMenuItem>
                            </NavLink>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
};

export default DropdownUserView;
