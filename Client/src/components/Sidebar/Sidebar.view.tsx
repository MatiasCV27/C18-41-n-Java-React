import React from 'react';

import NotificationCardContainer from '../NotificationCard/NotificationCard.container';
import CalendarContainer from '../Calendar/Calendar.container';
import UserHomeNewsContainer from '@/components/UserHomeNews/UserHomeNews.container';

interface Props {}

const SidebarView: React.FC<Props> = () => {
    return (
        // <aside className="fixed top-[24px] bottom-[24px] right-[24px] lg:w-[226px] xl:w-[291px] 2xl:w-[291px] flex flex-col justify-start">
        <aside className="  flex flex-col w-80 fixed top-24 right-0 items-end mx-6 gap-y-4 min-w-[226px] max-w-[330px]">
            {/* Contenido restante del Sidebar: Calendario, notificaciones, etc */}
            <CalendarContainer />
            <div className="bg-transparent overflow-x-hidden overflow-y-auto bg-red-700 flex flex-col gap-y-3 h-full">
                <NotificationCardContainer
                    title="Imparte tu primera clase"
                    description="Desbloquea esta misión y gana puntos"
                    pendingEvaluations={3}
                    totalEvaluations={10}
                    iconType="zap"
                />
                <NotificationCardContainer
                    title="Evaluaciones pendientes"
                    description="Certifica tus conocimientos"
                    pendingEvaluations={3}
                    totalEvaluations={10}
                    iconType="calendarCheck"
                />
            </div>
            <UserHomeNewsContainer />
        </aside>
    );
};

export default SidebarView;
