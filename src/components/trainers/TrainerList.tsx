
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trainer } from '@/lib/data';
import TrainerCard from './TrainerCard';

interface TrainerListProps {
  trainers: Trainer[];
}

const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-40">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-48">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>
              <SelectItem value="strength">Strength Training</SelectItem>
              <SelectItem value="yoga">Yoga & Pilates</SelectItem>
              <SelectItem value="hiit">HIIT & CrossFit</SelectItem>
              <SelectItem value="rehab">Rehabilitation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {trainers.length > 0 ? (
          trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))
        ) : (
          <p className="text-muted-foreground col-span-full text-center py-8">No trainers found. Try adjusting your search.</p>
        )}
      </div>
    </div>
  );
};

export default TrainerList;
