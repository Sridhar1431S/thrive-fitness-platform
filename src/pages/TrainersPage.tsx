
import React from 'react';
import TrainerList from '@/components/trainers/TrainerList';
import { trainers } from '@/lib/data';

const TrainersPage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <TrainerList trainers={trainers} />
    </div>
  );
};

export default TrainersPage;
