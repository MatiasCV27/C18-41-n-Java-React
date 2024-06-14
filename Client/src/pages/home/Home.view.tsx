import { useEffect, useState } from "react";
import UserHomeBannerContainer from "@/components/UserHomeBanner/UserHomeBanner.container";
import BigCalendarContainer from "@/components/BigCalendar/BigCalendar.container";
import UserHomeStudentsCardsContainer from "@/components/UserHomeStudentsCards/UserHomeStudentsCards.container";
import { useAuthStore } from "@/stores/auth/auth.store";
import { getUpcomingMeetings, getPendingMeetings, getMeetingHistories } from '@/controllers/studentMeetings/studentMeetings.controller';

const HomeView = () => {
  const username = useAuthStore((state) => state.user?.username);
  const [meetingsState, setMeetingsState] = useState({
    upcomingMeetings: null,
    pendingMeetings: null,
    meetingHistories: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!username) {
        console.log("No username available.");
        return;
      }

      try {
        // Realizar todas las llamadas para obtener las Meetings en paralelo
        const [upcomingMeetings, pendingMeetings, meetingHistories] = await Promise.all([
          getUpcomingMeetings(username),
          getPendingMeetings(username),
          getMeetingHistories(username),
        ]);

        // Guardar en el estado
        setMeetingsState({
          upcomingMeetings,
          pendingMeetings,
          meetingHistories,
        });

        console.log("Upcoming Meetings:", upcomingMeetings);
        console.log("Pending Meetings:", pendingMeetings);
        console.log("Meeting Histories:", meetingHistories);
      } catch (err) {
        console.error("Error fetching meetings information:", err);
      }
    };

    fetchData();
  }, [username]);

  return (
    <main className="flex flex-col space-y-[24px] w-auto mx-auto">
      <UserHomeBannerContainer />
      <UserHomeStudentsCardsContainer />
      <BigCalendarContainer />
    </main>
  );
};

export default HomeView;
