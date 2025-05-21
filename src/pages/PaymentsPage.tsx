
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentsPage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">Payments</h1>
          <p className="text-muted-foreground">Manage member payments</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Payment Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Payment management coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsPage;
