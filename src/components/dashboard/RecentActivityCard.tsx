
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ActivityItem {
  id: string;
  title: string;
  time: string;
  description: string;
  type: 'check-in' | 'payment' | 'class' | 'new-member';
}

interface RecentActivityCardProps {
  activities: ActivityItem[];
  className?: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ activities, className }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'check-in':
        return <div className="bg-blue-100 text-gym-primary rounded-full p-1 text-xs">IN</div>;
      case 'payment':
        return <div className="bg-green-100 text-gym-success rounded-full p-1 text-xs">$</div>;
      case 'class':
        return <div className="bg-purple-100 text-purple-600 rounded-full p-1 text-xs">C</div>;
      case 'new-member':
        return <div className="bg-orange-100 text-gym-accent rounded-full p-1 text-xs">+</div>;
      default:
        return null;
    }
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-start px-6 py-3 hover:bg-muted/50 transition-colors"
            >
              <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center mr-4">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
              </div>
              <div className="text-xs text-muted-foreground ml-2">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
