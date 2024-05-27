import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

const CalendarView: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border shadow"
    />
  )
}
 export default CalendarView