import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@/components/BigCalendar/index.css';

import { addHours } from 'date-fns';
import BigCalendarView from './BigCalendar.view';
import { localizer } from '@/utils/BigCalendar/calendarLocalizer.utils';
import { getMessagesES } from '@/utils/BigCalendar/getMessager.utils';
import { CalendarEvent } from './CalendarEvent/CalendarEvent';
import { useEffect, useState } from 'react';
import { CalendarModal } from './CalendarModal/CalendarModal';

export const events = [
    {
        idMeeting: '0',
        title: 'Java-Mentoria',
        notes: 'Some notes',
        start: addHours(new Date(), 2),
        end: addHours(new Date(), 3),
        fullname: 'Jorge Villafraz',
        urlToMeeting: 'https://meet.google.com/abc-def-ghi',
    },
    {
        idMeeting: '1',
        title: 'Phyton-Mentoria',
        start: addHours(new Date(), 4),
        end: addHours(new Date(), 5),
        fullname: 'Matias Criollo',
        urlToMeeting: 'https://meet.google.com/abc-def-ghi',
    },
    {
        idMeeting: '2',
        title: 'Angular-Mentoria',
        start: addHours(new Date(),15),
        end: addHours(new Date(), 17),
        fullname: 'John Doe',
        urlToMeeting: 'https://meet.google.com/abc-def-ghi',
    },
];

// const onDobbleClick = (event: any) => {
//     console.log({ onDobbleClick: event });
// };

const onSelect = (event: any) => {
    console.log({ onSelect: event });
};

const onViewChanged = (event: any) => {
    console.log({ onViewChanged: event });
};

const BigCalendarContainer = () => {
    const [ modalState, setModalState ] = useState(false);
    const [ modalEvent, setModalEvent ] = useState<any>({});

    useEffect(() => {
        console.log({ modalEvent });
    }, [modalEvent]);
    const onDobbleClick = (event: any) => {
        console.log({ onDobbleClick: event });
        setModalEvent({event});
        setModalState(true);

        console.log(modalEvent);

    };
    
    return (
        <>
            <BigCalendarView
                localaizer={localizer}
                myEventsList={events}
                messages={getMessagesES()}
                CalendarEvent={CalendarEvent}
                onDobbleClick={onDobbleClick}
                onSelect={onSelect}
                onViewChanged={onViewChanged}
            />
            <CalendarModal isModalOpen={modalState} onClose={setModalState} modalEvent={modalEvent}/>
        </>
    );
};

export default BigCalendarContainer;
