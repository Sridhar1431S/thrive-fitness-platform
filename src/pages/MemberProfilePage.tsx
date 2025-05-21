
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { members } from '@/lib/data';

const MemberProfilePage = () => {
  const { memberId } = useParams();
  const member = members.find(m => m.id === memberId);
  
  if (!member) {
    return (
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center h-64">
          <h1 className="text-2xl font-bold mb-4">Member not found</h1>
          <p className="text-muted-foreground">The member you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-1">{member.name}</h1>
          <p className="text-muted-foreground">{member.membershipType} Member</p>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center text-primary text-4xl font-semibold">
              {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-0">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{member.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{member.phone || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Membership Type</p>
                  <p className="font-medium">{member.membershipType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium capitalize">{member.status}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Join Date</p>
                  <p className="font-medium">{member.joinDate || "Not available"}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Attendance History</h2>
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">Attendance details coming soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Payment History</h2>
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">Payment history coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemberProfilePage;
