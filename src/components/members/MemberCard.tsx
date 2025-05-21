
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Member } from '@/lib/data';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-gym-success">Active</Badge>;
      case 'inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      case 'pending':
        return <Badge className="bg-gym-warning">Pending</Badge>;
      default:
        return null;
    }
  };

  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary text-lg font-semibold mr-4">
            {initials}
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{member.name}</h3>
              {getStatusBadge(member.status)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{member.email}</p>
            <p className="text-xs mt-1">
              <span className="font-medium">Membership:</span> {member.membershipType}
            </p>
            <div className="flex items-center mt-3 pt-3 border-t border-border">
              <Button variant="outline" size="sm" className="text-xs mr-2">View Profile</Button>
              <Button variant="outline" size="sm" className="text-xs">Check In</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
