import { Calendar, DateLocalizer, Messages } from 'react-big-calendar';

interface Props {
    localaizer: DateLocalizer;
    myEventsList: any;
    messages: Messages;
    CalendarEvent: any;
    onDobbleClick: any;
    onSelect: any;
    onViewChanged: any;
}

const BigCalendarView: React.FC<Props> = ({
    localaizer,
    myEventsList,
    messages,
    CalendarEvent,
    onDobbleClick,
    onSelect,
    onViewChanged,
}) => {
    return (
        <>
            <div className="w-full bg-background  shadow-lg">
                <Calendar
                    localizer={localaizer}
                    defaultView="week"
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    culture="es"
                    messages={messages}
                    components={{
                        event: CalendarEvent,
                    }}
                    onDoubleClickEvent={onDobbleClick}
                    onSelectEvent={onSelect}
                    onView={onViewChanged}
                />
            </div>
        </>
    );
};

export default BigCalendarView;
