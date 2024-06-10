// routes.tsx

import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import Layout from '@/layout/Layout';
import SigninContainer from '@/pages/auth/signin/Signin.auth.container';
import SignupContainer from '@/pages/auth/signup/Signup.auth.container';
import HomeContainer from '@/pages/home/Home.container';
import EstudiantesContainer from '@/pages/estudiantes/Estudiantes.container';
import TutoresContainer from '@/pages/tutores/Tutores.container';
import ExplorarContainer, {
    dataLoader,
} from '@/pages/explorar/Explorar.container';
import RecursosContainer from '@/pages/recursos/Recursos.container';
import GuardadoContainer from '@/pages/guardado/Guardado.container';
import EvaluacionesContainer from '@/pages/evaluaciones/Evaluaciones.container';
import ConfiguracionPerfilContainer from '@/pages/configuracionPerfil/layout/ConfiguracionPerfil.container';
import PerfilMentorContainer from '@/pages/configuracionPerfil/perfiMentor/PerfilMentor.container';
import InformacionPersonalContainer from '@/pages/configuracionPerfil/informacionPersonal/InformacionPersonal.container';
import queryString from 'query-string';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/inicio',
                element: <HomeContainer />,
            },
            {
                path: '/estudiantes',
                element: <EstudiantesContainer />,
            },
            {
                path: '/tutores',
                element: <TutoresContainer />,
            },
            {
                path: '/explorar',
                element: <ExplorarContainer />,
                //El loader es el que se encarga de hacer la peticion a la api antes de renderizar el componente
                loader: async ({ request }) => {
                    // Aca obtengo el query del url para hacer la peticion

                    const url = new URL(request.url);
                    // Aca parseo el query para hacer la peticion
                    const query = queryString.parse(url.search);

                    return await dataLoader(query);
                },
            },
            {
                path: '/recursos',
                element: <RecursosContainer />,
            },
            {
                path: '/guardado',
                element: <GuardadoContainer />,
            },
            {
                path: '/evaluaciones',
                element: <EvaluacionesContainer />,
            },
            {
                path: '/configurar-perfil',

                element: <ConfiguracionPerfilContainer />,

                children: [
                    {
                        path: 'mentor',
                        element: <PerfilMentorContainer />,
                    },
                    {
                        path: 'personal',
                        element: <InformacionPersonalContainer />,
                    },
                    {
                        index: true,
                        element: <Navigate to="personal" replace />,
                    },
                ],
            },
        ],
    },
    {
        path: '/signup',
        element: <SignupContainer />,
    },
    {
        path: '/signin',
        element: <SigninContainer />,
    },
]);

const AppRoutes: React.FC = () => <RouterProvider router={router} />;

export default AppRoutes;
