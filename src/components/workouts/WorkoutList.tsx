
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Workout, trainers } from '@/lib/data';
import { Plus, Search, Clock, Dumbbell } from 'lucide-react';

interface WorkoutListProps {
  workouts: Workout[];
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workouts }) => {
  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <Badge className="bg-gym-success">Beginner</Badge>;
      case 'intermediate':
        return <Badge className="bg-gym-warning">Intermediate</Badge>;
      case 'advanced':
        return <Badge className="bg-gym-danger">Advanced</Badge>;
      default:
        return null;
    }
  };

  const getTrainerName = (trainerId?: string) => {
    if (!trainerId) return 'Unassigned';
    const trainer = trainers.find(t => t.id === trainerId);
    return trainer ? trainer.name : 'Unassigned';
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">Workouts</h1>
          <p className="text-muted-foreground">Browse and manage workout programs</p>
        </div>
        <Button className="bg-gym-primary hover:bg-gym-primary/90">
          <Plus className="h-5 w-5 mr-2" />
          Create Workout
        </Button>
      </div>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search workouts..." className="pl-9" />
        </div>
        <div className="w-full sm:w-40">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-48">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="strength">Strength</SelectItem>
              <SelectItem value="cardio">Cardio</SelectItem>
              <SelectItem value="flexibility">Flexibility</SelectItem>
              <SelectItem value="core">Core</SelectItem>
              <SelectItem value="rehab">Rehabilitation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <Card key={workout.id} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{workout.name}</h3>
                {getDifficultyBadge(workout.difficulty)}
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Clock className="h-4 w-4 mr-1" />
                <span>{workout.duration} minutes</span>
                <span className="mx-2">•</span>
                <Badge variant="outline">{workout.category}</Badge>
              </div>
              <p className="text-sm mb-4 line-clamp-2">{workout.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="text-xs">
                  <span className="text-muted-foreground">Trainer: </span>
                  <span>{getTrainerName(workout.trainerId)}</span>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  <Dumbbell className="h-3 w-3 mr-1" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
