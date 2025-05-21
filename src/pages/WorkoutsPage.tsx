
import React from 'react';
import WorkoutList from '@/components/workouts/WorkoutList';
import { workouts } from '@/lib/data';

const WorkoutsPage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default WorkoutsPage;
