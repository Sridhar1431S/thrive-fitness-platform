
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClassesPage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">Classes</h1>
          <p className="text-muted-foreground">Manage your gym classes</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Class Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Class schedule functionality coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassesPage;
