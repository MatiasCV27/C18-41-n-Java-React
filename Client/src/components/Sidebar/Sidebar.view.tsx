import React from 'react';
import { Home, UserRound, Users, FolderHeart, CalendarCheck, BookmarkCheck, Globe } from 'lucide-react';

const SidebarView: React.FC = () => {
    const menuItems = [
        { name: 'Inicio', icon: <Home /> },
        { name: 'Estudiantes', icon: <UserRound /> },
        { name: 'Tutores', icon: <Users /> },
        { name: 'Explorar', icon: <Globe /> },
        { name: 'Recursos', icon: <FolderHeart /> },
        { name: 'Guardado', icon: <BookmarkCheck /> },
        { name: 'Evaluaciones', icon: <CalendarCheck /> },
    ];


    return (
        <div className="fixed  top-[120px] bottom-[24px] left-[24px] h-[876] w-[329px] bg-gray-800 text-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold my-6 ml-2 tracking-wide"><span className='text-blue-500'>Swap</span> It Up</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center mb-4 p-2 hover:bg-gray-700 rounded-md">
                        {item.icon}
                        <span className="ml-4 text-lg">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarView;

