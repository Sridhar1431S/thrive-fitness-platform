
import React, { useState } from 'react';
import WorkoutList from '@/components/workouts/WorkoutList';
import { workouts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';

const WorkoutsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter workouts based on search term
  const filteredWorkouts = searchTerm 
    ? workouts.filter(workout => 
        workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workout.difficulty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workout.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : workouts;
    
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">Workouts</h1>
          <p className="text-muted-foreground">Manage your gym workouts and routines</p>
        </div>
        <Button className="bg-gym-primary hover:bg-gym-primary/90">
          <Plus className="h-5 w-5 mr-2" />
          Create Workout
        </Button>
      </div>
      
      <div className="mb-6 relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search workouts..." 
          className="pl-9" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <WorkoutList workouts={filteredWorkouts} />
    </div>
  );
};

export default WorkoutsPage;
