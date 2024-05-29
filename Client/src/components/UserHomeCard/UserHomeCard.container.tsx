// UserHomeCardContainer.jsx
import * as React from "react";
import UserHomeCardView from "./UserHomeCard.view";

interface UserHomeCardContainerProps {
  title: string;
  completedClasses: number;
  totalClasses: number;
}

const UserHomeCardContainer: React.FC<UserHomeCardContainerProps> = ({ title, completedClasses, totalClasses }) => {
  return (
    <UserHomeCardView
      title={title}
      completedClasses={completedClasses}
      totalClasses={totalClasses}
    />
  );
};

export default UserHomeCardContainer;
