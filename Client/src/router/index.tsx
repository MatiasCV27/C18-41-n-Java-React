// routes.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/layout/Layout';
import SigninContainer from '@/pages/auth/signin/Signin.auth.container';
import SignupContainer from '@/pages/auth/signup/Signup.auth.container';
import HomeContainer from '@/pages/home/Home.container';
import EstudiantesContainer from '@/pages/students/Estudiantes.container';
import TutoresContainer from '@/pages/tutores/Tutores.container';
import ExplorarContainer from '@/pages/explorar/Explorar.container';
import RecursosContainer from '@/pages/recursos/Recursos.container';
import GuardadoContainer from '@/pages/guardado/Guardado.container';
import EvaluacionesContainer from '@/pages/evaluaciones/Evaluaciones.container';

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
