import React from "react";
import NotificationCardView from "./NotificationCard.view";
import { Zap, CalendarCheck } from "lucide-react";

interface NotificationCardContainerProps {
  title: string;
  description: string;
  pendingEvaluations: number;
  totalEvaluations: number;
  iconType: "zap" | "calendarCheck";
}

const NotificationCardContainer: React.FC<NotificationCardContainerProps> = ({
  title,
  description,
  pendingEvaluations,
  totalEvaluations,
  iconType,
}) => {
  const progressPercentage = (pendingEvaluations / totalEvaluations) * 100;

  const renderIcon = () => {
    switch (iconType) {
      case "zap":
        return (
          <div className="bg-white rounded-full p-1 border-2 border-black">
            <Zap size={25} strokeWidth={2} color="black" fill="yellow" />
          </div>
        );
      case "calendarCheck":
        return <CalendarCheck size={30} strokeWidth={2} color="black" fill="yellow" />;
      default:
        return null;
    }
  };

  return (
    <NotificationCardView
      title={title}
      description={description}
      pendingEvaluations={pendingEvaluations}
      totalEvaluations={totalEvaluations}
      progressPercentage={progressPercentage}
      renderIcon={renderIcon}
    />
  );
};

export default NotificationCardContainer;
