import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";


interface NotificationCardViewProps {
  title: string;
  description: string;
  pendingEvaluations: number;
  totalEvaluations: number;
  progressPercentage: number;
  renderIcon: () => JSX.Element | null;
}

const NotificationCardView: React.FC<NotificationCardViewProps> = ({
  title,
  description,
  pendingEvaluations,
  totalEvaluations,
  progressPercentage,
  renderIcon,
}) => {
  return (
    <Card className="rounded-lg shadow-md bg-background w-full h-[147px]">
      <CardHeader className="w-full p-2 text-center">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <ChevronRight />
        </div>
      </CardHeader>
      <CardContent className="flex items-start w-full h-auto p-2 pt-0">
        <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-lg  p-3">
          <div>{renderIcon()}</div>
        </div>
        <div className="w-3/4 flex flex-col justify-between pl-2">
          <div>
            <CardDescription className="text-muted text-md">
              {description}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <Progress
              value={progressPercentage}
              className="w-full border border-muted"
            />
            <p className="text-sm text-muted">
              {pendingEvaluations}/{totalEvaluations}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCardView;
