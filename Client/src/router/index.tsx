import App from '@/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

export const MyRoutes = () => <RouterProvider router={router} />;
