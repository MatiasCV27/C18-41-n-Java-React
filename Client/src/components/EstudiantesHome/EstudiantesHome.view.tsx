import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EstudiantesHomeCardContainer from '../EstudiantesHomeCard/EstudiantesHomeCard.container';
import EstudianteHomeSolicitudContainer from '../EstudiantesHomeSolicitud/EstudianteHomeSolicitud.container';
import EstudiantesHomeHistorialContainer from '../EstudiantesHomeHistorial/EstudiantesHomeHistorial.container';
import Calendario31 from '../icons/Calendario31';
import Calendario from '../icons/Calendario';
import { useAuthStore } from '@/stores/auth/auth.store';
import { MeetingsForTutorsController } from '@/controllers/meetingsForTutors/meetingsForTutors.controller';

const TABS = [
    { id: 'proximos', label: 'Próximas' },
    { id: 'pendientes', label: 'Pendientes' },
    { id: 'historial', label: 'Historial' },
];

interface Props {
    onExploreMentoresClick: () => void;
}

const meetingsForTutorsController = new MeetingsForTutorsController();

const getPendingMeetings = async (username: string) => {
    if (!username) return;
    try {
        const pendingMeetings =
            await meetingsForTutorsController.getPendingMeetings(username);
        return pendingMeetings;
    } catch (error) {
        console.error(error);
    }
};

const getUpcomingMeetings = async (username: string) => {
    if (!username) return;
    try {
        const upcomingMeetings =
            await meetingsForTutorsController.getUpcomingMeetings(username);
        return upcomingMeetings;
    } catch (error) {
        console.error(error);
    }
};

const getHistorialMeetings = async (username: string) => {
    if (!username) return;
    try {
        const historialMeetings =
            await meetingsForTutorsController.getMeetingHistory(username);
        return historialMeetings;
    } catch (error) {
        console.error(error);
    }
};
const EstudiantesHomeView: React.FC<Props> = ({ onExploreMentoresClick }) => {
    const [activeTab, setActiveTab] = useState<string>('proximos');
    const [pendingMeetings, setPendingMeetings] = useState<any[]>([]);
    const [upcomingMeetings, setUpcomingMeetings] = useState<any[]>([]);
    const [historialMeetings, setHistorialMeetings] = useState<any[]>([]);
    const username = useAuthStore((state) => state.user?.username);

    useEffect(() => {
        const getData = async () => {
            if (activeTab === 'pendientes') {
                if (!username) {
                    console.log('No hay username');
                    return;
                }
                const response = await getPendingMeetings(username);
                console.log({ response });
                setPendingMeetings(response);
            } else if (activeTab === 'proximos') {
                if (!username) {
                    console.log('No hay username');
                    return;
                }
                const response = await getUpcomingMeetings(username);
                console.log({ response });
                setUpcomingMeetings(response);
            } else if (activeTab === 'historial') {
                if (!username) {
                    console.log('No hay username');
                    return;
                }
                const response = await getHistorialMeetings(username);
                console.log({ response });
                setHistorialMeetings(response);
            }
        };

        getData();
    }, [username, activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case 'proximos':
                return (
                    <>
                        <p className="mb-4 text-black text-lg">
                            Tienes clases próximamente. Reúnete con tus
                            estudiantes en el horario acordado.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
                            {Array(6)
                                .fill(null)
                                .map((_, index) => (
                                    <EstudiantesHomeCardContainer key={index} />
                                ))}
                        </div>
                        <Button
                            onClick={onExploreMentoresClick}
                            className="bg-muted text-white hover:bg-accent hover:text-white rounded-lg mt-2 shadow-md"
                        >
                            <span className="font-semibold">
                                Explora mentores
                            </span>
                            <ArrowRight size={18} className="ml-4" />
                        </Button>
                    </>
                );
            case 'pendientes':
                return (
                    <>
                        <p className="mb-4 text-black text-lg">
                            Tienes solicitudes pendientes. Acepta a los
                            estudiantes con los que desees impartir clases.
                        </p>
                        <div className="flex flex-col w-full gap-4">
                            {Array(1)
                                .fill(null)
                                .map((_, index) => (
                                    <EstudianteHomeSolicitudContainer
                                        key={index}
                                    />
                                ))}
                        </div>
                    </>
                );
            case 'historial':
                return <EstudiantesHomeHistorialContainer />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-auto">
            <div>
                <div className="flex space-x-2 mb-2 w-full">
                    <Calendario size={24} />
                    <h2 className="text-base">
                        Comporta a tiempo real tu tiempo disponible
                    </h2>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold mt-5 mb-2">
                        Calendarios vinculados
                    </span>
                    {[
                        'Google Calendar',
                        'Microsoft Outlook',
                        'Apple Calendar',
                    ].map((calendario, index) => (
                        <div key={index} className="p-4">
                            <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4 hover:text-white">
                                <Calendario31 size={24} />
                                <span className="mx-4 text-[16px] font-bold">
                                    {calendario}
                                </span>
                                <ChevronRight size={24} />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <div className="flex w-full space-x-20">
                    {TABS.map((tab) => (
                        <h3
                            key={tab.id}
                            className={`text-lg font-bold mb-2 cursor-pointer hover:border-b-[3px] hover:border-accent ${
                                activeTab === tab.id &&
                                'border-b-[3px] border-accent'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </h3>
                    ))}
                </div>
                <div className="mt-4">{renderContent()}</div>
            </div>
        </div>
    );
};

export default EstudiantesHomeView;
