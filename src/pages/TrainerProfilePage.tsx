
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { trainers } from '@/lib/data';

const TrainerProfilePage = () => {
  const { trainerId } = useParams();
  const trainer = trainers.find(t => t.id === trainerId);
  
  if (!trainer) {
    return (
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center h-64">
          <h1 className="text-2xl font-bold mb-4">Trainer not found</h1>
          <p className="text-muted-foreground">The trainer you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">{trainer.name}</h1>
          <p className="text-muted-foreground">{trainer.specialization}</p>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center text-primary text-4xl font-semibold">
              {trainer.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-0">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{trainer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{trainer.phone || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Specialization</p>
                  <p className="font-medium">{trainer.specialization}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium capitalize">{trainer.status}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">Bio</p>
                  <p className="font-medium">{trainer.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Schedule</h2>
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">Schedule details coming soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Classes</h2>
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">Class assignments coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainerProfilePage;
