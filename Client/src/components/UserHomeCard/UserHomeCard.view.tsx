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
import { Zap } from "lucide-react";

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
    <Card className="w-[214px] h-[250px] justify-start">
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
            <div className="bg-accent rounded-full p-1 border border-black">
              <Zap size={10} strokeWidth={1} color="black" fill="yellow" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex items-center space-x-2">
        <Progress value={progressPercentage} className="w-full" />
      </CardContent>
      <CardFooter>
        <p className="text-sm">
          {completedClasses} de {totalClasses} clases completadas
        </p>
        <span>
          {completedClasses}/{totalClasses}
        </span>
      </CardFooter>
    </Card>
  );
};

export default UserHomeCardView;
