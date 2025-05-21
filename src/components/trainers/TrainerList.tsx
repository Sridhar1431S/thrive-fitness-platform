
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trainer } from '@/lib/data';
import TrainerCard from './TrainerCard';
import { Plus, Search } from 'lucide-react';

interface TrainerListProps {
  trainers: Trainer[];
}

const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">Trainers</h1>
          <p className="text-muted-foreground">Manage your gym trainers</p>
        </div>
        <Button className="bg-gym-primary hover:bg-gym-primary/90">
          <Plus className="h-5 w-5 mr-2" />
          Add Trainer
        </Button>
      </div>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search trainers..." className="pl-9" />
        </div>
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
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default TrainerList;
