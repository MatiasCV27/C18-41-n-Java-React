// UserHomeCardView.jsx
"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import UserHomeCard from "@/assets/UserHomeCard.jpg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RayoCeleste from "../icons/RayoCeleste";

interface UserHomeCardProps {
  title: string;
  completedClasses: number;
  totalClasses: number;
}

const UserHomeCardView: React.FC<UserHomeCardProps> = ({
  title,
  completedClasses,
  totalClasses,
}) => {
  const progressPercentage = (completedClasses / totalClasses) * 100;

  return (
    <Card className="lg:w-[226px] xl:w-[214px] 2xl:w-[214px] lg:h-[236px] xl:h-[236px] 2xl:h-[250px] justify-start">
      <img
        src={UserHomeCard}
        alt=""
        className="aspect-video w-[194px] h-[133px] bg-center bg-cover rounded-lg"
      />
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center space-x-1">
            <span className="text-black font-medium text-md">1</span>
            <RayoCeleste size={20} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col">
        <Progress value={progressPercentage} className="w-full" />
        <div className="flex items-center space-x-2 mt-1">
          <p className="text-sm">
            {completedClasses} de {totalClasses} clases completadas
          </p>
          <span>
            {completedClasses}/{totalClasses}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserHomeCardView;
