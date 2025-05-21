
export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  membershipType: string;
  status: 'active' | 'inactive' | 'pending';
  lastCheckIn?: string;
}

export interface Trainer {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  status: 'active' | 'inactive';
  bio: string;
  imageUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  trainerId?: string;
  category: string;
}

export interface ClassSchedule {
  id: string;
  workoutId: string;
  trainerId: string;
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  maxCapacity: number;
  currentAttendees: number;
}

export interface Payment {
  id: string;
  memberId: string;
  amount: number;
  date: string; // ISO date string
  type: 'membership' | 'personal_training' | 'merchandise' | 'other';
  status: 'paid' | 'pending' | 'failed';
  description?: string;
}

export interface Attendance {
  id: string;
  memberId: string;
  checkInTime: string; // ISO date string
  checkOutTime?: string; // ISO date string
  classId?: string;
}

// Mock data
export const members: Member[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    joinDate: '2023-01-15',
    membershipType: 'Premium',
    status: 'active',
    lastCheckIn: '2023-05-20T08:30:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '555-987-6543',
    joinDate: '2023-02-20',
    membershipType: 'Standard',
    status: 'active',
    lastCheckIn: '2023-05-19T17:15:00Z'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '555-567-8901',
    joinDate: '2023-03-10',
    membershipType: 'Basic',
    status: 'inactive'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    phone: '555-234-5678',
    joinDate: '2023-04-05',
    membershipType: 'Premium',
    status: 'active',
    lastCheckIn: '2023-05-20T06:45:00Z'
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.brown@example.com',
    phone: '555-876-5432',
    joinDate: '2023-04-15',
    membershipType: 'Standard',
    status: 'pending'
  }
];

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Chris Evans',
    email: 'chris.evans@example.com',
    phone: '555-111-2222',
    specialization: 'Strength Training',
    status: 'active',
    bio: 'Certified strength coach with 7 years of experience specializing in powerlifting and bodybuilding techniques.'
  },
  {
    id: '2',
    name: 'Natasha Romano',
    email: 'natasha.romano@example.com',
    phone: '555-333-4444',
    specialization: 'Yoga & Pilates',
    status: 'active',
    bio: 'Yoga instructor with 5 years of experience helping clients improve flexibility and mindfulness.'
  },
  {
    id: '3',
    name: 'James Rhodes',
    email: 'james.rhodes@example.com',
    phone: '555-555-6666',
    specialization: 'HIIT & CrossFit',
    status: 'active',
    bio: 'Certified CrossFit coach passionate about helping clients achieve their fitness goals through high-intensity training.'
  },
  {
    id: '4',
    name: 'Wanda Maximoff',
    email: 'wanda.maximoff@example.com',
    phone: '555-777-8888',
    specialization: 'Rehabilitation',
    status: 'inactive',
    bio: 'Physical therapist specializing in injury recovery and movement rehabilitation.'
  }
];

export const workouts: Workout[] = [
  {
    id: '1',
    name: 'Full Body Blast',
    description: 'Complete full body workout targeting all major muscle groups with compound exercises.',
    duration: 60,
    difficulty: 'intermediate',
    trainerId: '1',
    category: 'Strength'
  },
  {
    id: '2',
    name: 'Yoga Flow',
    description: 'Mindful movement through various yoga poses to improve flexibility and reduce stress.',
    duration: 45,
    difficulty: 'beginner',
    trainerId: '2',
    category: 'Flexibility'
  },
  {
    id: '3',
    name: 'HIIT Circuit',
    description: 'High-intensity interval training to maximize calorie burn and cardiovascular health.',
    duration: 30,
    difficulty: 'advanced',
    trainerId: '3',
    category: 'Cardio'
  },
  {
    id: '4',
    name: 'Core Crusher',
    description: 'Focused core workout to build abdominal strength and improve posture.',
    duration: 30,
    difficulty: 'intermediate',
    trainerId: '1',
    category: 'Core'
  },
  {
    id: '5',
    name: 'Rehabilitation Basics',
    description: 'Gentle exercises focused on proper movement patterns and injury prevention.',
    duration: 45,
    difficulty: 'beginner',
    trainerId: '4',
    category: 'Rehabilitation'
  }
];

export const classSchedules: ClassSchedule[] = [
  {
    id: '1',
    workoutId: '1',
    trainerId: '1',
    startTime: '2023-05-21T09:00:00Z',
    endTime: '2023-05-21T10:00:00Z',
    maxCapacity: 15,
    currentAttendees: 8
  },
  {
    id: '2',
    workoutId: '2',
    trainerId: '2',
    startTime: '2023-05-21T11:00:00Z',
    endTime: '2023-05-21T11:45:00Z',
    maxCapacity: 20,
    currentAttendees: 12
  },
  {
    id: '3',
    workoutId: '3',
    trainerId: '3',
    startTime: '2023-05-21T17:00:00Z',
    endTime: '2023-05-21T17:30:00Z',
    maxCapacity: 10,
    currentAttendees: 10
  },
  {
    id: '4',
    workoutId: '4',
    trainerId: '1',
    startTime: '2023-05-22T09:00:00Z',
    endTime: '2023-05-22T09:30:00Z',
    maxCapacity: 15,
    currentAttendees: 5
  }
];

export const recentPayments: Payment[] = [
  {
    id: '1',
    memberId: '1',
    amount: 99.99,
    date: '2023-05-15T10:30:00Z',
    type: 'membership',
    status: 'paid',
    description: 'Premium Monthly Membership'
  },
  {
    id: '2',
    memberId: '2',
    amount: 59.99,
    date: '2023-05-16T14:45:00Z',
    type: 'membership',
    status: 'paid',
    description: 'Standard Monthly Membership'
  },
  {
    id: '3',
    memberId: '4',
    amount: 99.99,
    date: '2023-05-17T09:15:00Z',
    type: 'membership',
    status: 'paid',
    description: 'Premium Monthly Membership'
  },
  {
    id: '4',
    memberId: '1',
    amount: 75.00,
    date: '2023-05-18T16:30:00Z',
    type: 'personal_training',
    status: 'paid',
    description: 'Personal Training Session with Chris'
  },
  {
    id: '5',
    memberId: '3',
    amount: 39.99,
    date: '2023-05-10T11:00:00Z',
    type: 'membership',
    status: 'failed',
    description: 'Basic Monthly Membership'
  }
];

export const recentAttendance: Attendance[] = [
  {
    id: '1',
    memberId: '1',
    checkInTime: '2023-05-20T08:30:00Z',
    checkOutTime: '2023-05-20T09:45:00Z',
    classId: '1'
  },
  {
    id: '2',
    memberId: '4',
    checkInTime: '2023-05-20T06:45:00Z',
    checkOutTime: '2023-05-20T08:15:00Z'
  },
  {
    id: '3',
    memberId: '2',
    checkInTime: '2023-05-19T17:15:00Z',
    checkOutTime: '2023-05-19T18:30:00Z',
    classId: '3'
  }
];

// Stats for dashboard
export const gymStats = {
  totalMembers: members.length,
  activeMembers: members.filter(m => m.status === 'active').length,
  totalTrainers: trainers.length,
  activeTrainers: trainers.filter(t => t.status === 'active').length,
  totalClasses: classSchedules.length,
  revenueThisMonth: recentPayments.reduce((sum, payment) => sum + payment.amount, 0),
  attendanceToday: recentAttendance.filter(a => 
    new Date(a.checkInTime).toDateString() === new Date().toDateString()
  ).length,
  popularWorkout: 'HIIT Circuit'
};
