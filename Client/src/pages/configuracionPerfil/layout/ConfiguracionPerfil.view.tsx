import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface Props {}

const ConfiguracionPerfilView: React.FC<Props> = () => {
    return (
        <>
            <header>
                <h1 className="text-2xl font-bold tracking-wide mb-4">
                    Configuración
                </h1>
                <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 border-b-[1px] border-b-zinc-200">
                    <NavLink
                        to="/configurar-perfil/mentor"
                        className={({isActive}) => {
                            return isActive
                                ? 'text-base font-bold  border-b-[3px] border-accent'
                                : 'text-base font-bold  hover:border-b-[3px] hover:border-accent';
                        }}
                    >
                        Perfil como mentor
                    </NavLink>
                    <NavLink
                        to={'/configurar-perfil/personal'}
                        className={({isActive}) => {
                            return isActive
                                ? 'text-base font-bold  border-b-[3px] border-accent'
                                : 'text-base font-bold  hover:border-b-[3px] hover:border-accent';
                        }}
                    >
                        Informacion personal
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default ConfiguracionPerfilView;
