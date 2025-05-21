
import React, { useState } from 'react';
import TrainerList from '@/components/trainers/TrainerList';
import { trainers } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';

const TrainersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter trainers based on search term
  const filteredTrainers = searchTerm 
    ? trainers.filter(trainer => 
        trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : trainers;
    
  return (
    <div className="container mx-auto max-w-7xl">
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
      
      <div className="mb-6 relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search trainers..." 
          className="pl-9" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <TrainerList trainers={filteredTrainers} />
    </div>
  );
};

export default TrainersPage;
