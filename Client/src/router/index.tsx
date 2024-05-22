import HomeContainer from '@/pages/home/Home.container';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: < HomeContainer/>,
    },
]);

export const MyRoutes = () => <RouterProvider router={router} />;
