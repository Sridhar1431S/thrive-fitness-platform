
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Calendar, 
  Dumbbell, 
  CreditCard, 
  Settings,
  FileText
} from 'lucide-react';

interface SidebarProps {
  isSidebarOpen: boolean;
}

interface NavItem {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const mainNav: NavItem[] = [
    { 
      href: '/', 
      icon: <Home className="h-5 w-5" />,
      title: 'Dashboard'
    },
    { 
      href: '/members', 
      icon: <Users className="h-5 w-5" />,
      title: 'Members'
    },
    { 
      href: '/trainers', 
      icon: <Users className="h-5 w-5" />,
      title: 'Trainers'
    },
    { 
      href: '/classes', 
      icon: <Calendar className="h-5 w-5" />,
      title: 'Classes'
    },
    { 
      href: '/workouts', 
      icon: <Dumbbell className="h-5 w-5" />,
      title: 'Workouts'
    },
    { 
      href: '/payments', 
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Payments'
    },
    { 
      href: '/reports', 
      icon: <FileText className="h-5 w-5" />,
      title: 'Reports'
    },
  ];
  
  const secondaryNav: NavItem[] = [
    { 
      href: '/settings', 
      icon: <Settings className="h-5 w-5" />,
      title: 'Settings'
    },
  ];

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-20 h-full w-64 flex-shrink-0 bg-sidebar transform transition-transform duration-300 lg:translate-x-0 lg:static pt-16", 
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex flex-col h-full px-4 py-6">
        <nav className="space-y-1 flex-1">
          <div className="mb-6">
            <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Main
            </div>
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 my-1 text-sm rounded-md transition-colors",
                  isActive 
                    ? "bg-gym-primary text-white font-medium" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </NavLink>
            ))}
          </div>
          
          <div>
            <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              System
            </div>
            {secondaryNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 my-1 text-sm rounded-md transition-colors",
                  isActive 
                    ? "bg-gym-primary text-white font-medium" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </nav>
        
        <div className="mt-auto">
          <div className="bg-sidebar-accent rounded-lg p-4">
            <h3 className="text-sm font-medium text-sidebar-accent-foreground">Need help?</h3>
            <p className="text-xs text-sidebar-foreground mt-1">Check our documentation or contact support</p>
            <button className="text-xs text-gym-primary hover:underline mt-2">View Documentation</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
