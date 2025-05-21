
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import MemberList from '@/components/members/MemberList';
import TrainerList from '@/components/trainers/TrainerList';
import WorkoutList from '@/components/workouts/WorkoutList';
import { 
  members, 
  trainers, 
  workouts, 
  gymStats,
  recentPayments,
  recentAttendance,
  classSchedules
} from '@/lib/data';
import { 
  Users, 
  UserCheck,
  Dumbbell, 
  CreditCard,
  TrendingUp,
  Calendar
} from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Create recent activity data from our mock data
  const recentActivities = [
    ...recentAttendance.map(attendance => ({
      id: `attendance-${attendance.id}`,
      title: `${members.find(m => m.id === attendance.memberId)?.name || 'Member'} checked in`,
      time: new Date(attendance.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      description: attendance.classId 
        ? `Joined ${classSchedules.find(c => c.id === attendance.classId)?.workoutId} class`
        : 'Regular gym visit',
      type: 'check-in' as const
    })),
    ...recentPayments.map(payment => ({
      id: `payment-${payment.id}`,
      title: `${members.find(m => m.id === payment.memberId)?.name || 'Member'} made a payment`,
      time: new Date(payment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      description: `$${payment.amount.toFixed(2)} - ${payment.description}`,
      type: 'payment' as const
    }))
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 6);

  return (
    <div className="container mx-auto max-w-7xl">
      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="trainers">Trainers</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="space-y-8">
            {/* Stats cards */}
            <div className="stats-grid">
              <StatsCard 
                title="Total Members" 
                value={gymStats.totalMembers}
                icon={<Users className="h-6 w-6 text-gym-primary" />} 
                trend={{ value: 12, isPositive: true }}
              />
              <StatsCard 
                title="Active Members" 
                value={gymStats.activeMembers}
                icon={<UserCheck className="h-6 w-6 text-gym-success" />} 
                trend={{ value: 8, isPositive: true }}
              />
              <StatsCard 
                title="Classes Today" 
                value={gymStats.totalClasses}
                icon={<Calendar className="h-6 w-6 text-gym-primary" />} 
              />
              <StatsCard 
                title="Monthly Revenue" 
                value={`$${gymStats.revenueThisMonth.toFixed(2)}`}
                icon={<CreditCard className="h-6 w-6 text-gym-secondary" />} 
                trend={{ value: 5, isPositive: true }}
              />
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 h-[350px]">
                <CardHeader>
                  <CardTitle className="text-lg">Attendance Overview</CardTitle>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="h-[260px] flex items-center justify-center bg-muted/30 rounded-md">
                    <div className="text-center">
                      <p className="text-muted-foreground">
                        Chart would display here showing attendance trends
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Daily gym visits over the past 30 days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <RecentActivityCard activities={recentActivities} />
            </div>

            {/* Popular workouts and quick actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="section-title">Popular Workouts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {workouts.slice(0, 4).map((workout) => (
                    <Card key={workout.id} className="card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{workout.name}</h3>
                          <Dumbbell className="h-4 w-4 text-gym-primary" />
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span>{workout.duration} min</span>
                          <span className="mx-1.5">•</span>
                          <span>{workout.difficulty}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="section-title">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/members">
                    <Card className="card-hover">
                      <CardContent className="flex items-center justify-between p-3">
                        <div className="flex items-center">
                          <div className="rounded-full p-2 bg-gym-primary/10 mr-3">
                            <Users className="h-5 w-5 text-gym-primary" />
                          </div>
                          <span>Add Member</span>
                        </div>
                        <span className="text-lg">→</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/trainers">
                    <Card className="card-hover">
                      <CardContent className="flex items-center justify-between p-3">
                        <div className="flex items-center">
                          <div className="rounded-full p-2 bg-gym-secondary/10 mr-3">
                            <UserCheck className="h-5 w-5 text-gym-secondary" />
                          </div>
                          <span>Add Trainer</span>
                        </div>
                        <span className="text-lg">→</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/workouts">
                    <Card className="card-hover">
                      <CardContent className="flex items-center justify-between p-3">
                        <div className="flex items-center">
                          <div className="rounded-full p-2 bg-gym-accent/10 mr-3">
                            <Dumbbell className="h-5 w-5 text-gym-accent" />
                          </div>
                          <span>Create Workout</span>
                        </div>
                        <span className="text-lg">→</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/payments">
                    <Card className="card-hover">
                      <CardContent className="flex items-center justify-between p-3">
                        <div className="flex items-center">
                          <div className="rounded-full p-2 bg-gym-success/10 mr-3">
                            <CreditCard className="h-5 w-5 text-gym-success" />
                          </div>
                          <span>Record Payment</span>
                        </div>
                        <span className="text-lg">→</span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="members">
          <MemberList members={members} />
        </TabsContent>

        <TabsContent value="trainers">
          <TrainerList trainers={trainers} />
        </TabsContent>

        <TabsContent value="workouts">
          <WorkoutList workouts={workouts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
