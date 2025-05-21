
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import MembersPage from "./pages/MembersPage";
import TrainersPage from "./pages/TrainersPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import ClassesPage from "./pages/ClassesPage";
import PaymentsPage from "./pages/PaymentsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import MemberProfilePage from "./pages/MemberProfilePage";
import TrainerProfilePage from "./pages/TrainerProfilePage";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen">
            <Navbar toggleSidebar={toggleSidebar} />
            
            <div className="flex">
              <Sidebar isSidebarOpen={isSidebarOpen} />
              
              <main className="flex-grow p-6 lg:pl-6 mt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/members" element={<MembersPage />} />
                  <Route path="/trainers" element={<TrainersPage />} />
                  <Route path="/classes" element={<ClassesPage />} />
                  <Route path="/workouts" element={<WorkoutsPage />} />
                  <Route path="/payments" element={<PaymentsPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/members/:memberId" element={<MemberProfilePage />} />
                  <Route path="/trainers/:trainerId" element={<TrainerProfilePage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
