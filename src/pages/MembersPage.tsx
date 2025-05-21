
import React from 'react';
import MemberList from '@/components/members/MemberList';
import { members } from '@/lib/data';

const MembersPage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <MemberList members={members} />
    </div>
  );
};

export default MembersPage;
