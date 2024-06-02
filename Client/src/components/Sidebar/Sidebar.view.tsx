import React from "react";
import { Zap, BellDot } from "lucide-react";

import NotificationCardContainer from "../NotificationCard/NotificationCard.container";
import CalendarContainer from "../Calendar/Calendar.container";
import UserHomeNewsContainer from "@/components/UserHomeNews/UserHomeNews.container";
import DropdownUserContainer from "../DropdownUser/DropdownUser.container";

interface Props {}

const SidebarView: React.FC<Props> = () => {
  return (
    <aside className="fixed top-[24px] bottom-[24px] right-[24px] lg:w-[226px] xl:w-[291px] 2xl:w-[291px] flex flex-col justify-start">
      <div className="flex items-center justify-between p-2 ">
        <div className="flex-1 flex items-center justify-end space-x-6">
          <div className="flex space-x-2">
            <span className="text-black font-medium text-xl">1</span>
            <div className="bg-accent rounded-full p-1 border border-black">
              <Zap size={25} strokeWidth={2} color="black" fill="yellow" />
            </div>
          </div>
          <BellDot size={30} color="black" />
          <DropdownUserContainer />
        </div>
      </div>
      <CalendarContainer />
      <div className="bg-transparent overflow-x-hidden overflow-y-auto flex flex-col space-y-4 pt-2 h-full">
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
