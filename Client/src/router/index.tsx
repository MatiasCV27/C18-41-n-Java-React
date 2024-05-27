import SigninContainer from '@/pages/auth/signin/Signin.auth.container';
import SignupContainer from '@/pages/auth/signup/Signup.auth.container';
import HomeContainer from '@/pages/home/Home.container';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeContainer />,
    },

    {
        path: 'signup',
        element: <SignupContainer />,
    },

    {
        path: 'signin',
        element: <SigninContainer />,
    },
]);

export const MyRoutes = () => <RouterProvider router={router} />;
