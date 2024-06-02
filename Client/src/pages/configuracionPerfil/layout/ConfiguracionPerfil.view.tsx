import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {}

const ConfiguracionPerfilView: React.FC<Props> = () => {
    return (
        <>
            <header>
                <h1>Configuración</h1>
                <nav>
                    <NavLink
                        to="/"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Perfil como mentor
                    </NavLink>
                    <NavLink
                        to={'/orders'}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Informacion personal
                    </NavLink>
                </nav>
            </header>
        </>
    );
};

export default ConfiguracionPerfilView;
