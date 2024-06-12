import { FC } from 'react';

interface Props {
    event: any;
}

export const CalendarEvent: FC<Props> = ({ event }) => {
    const { title } = event;
    return (
        <>
            <strong className="text-xs font-semibold">{title}</strong>
            <p className="text-xs font-light">{event.fullname}</p>
        </>
    )
};
