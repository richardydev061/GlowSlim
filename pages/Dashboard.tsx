
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useUser } from "@/context/UserContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWeightData } from "@/hooks/useWeightData";
import { useNotifications } from "@/hooks/useNotifications";
import UserHeader from "@/components/dashboard/UserHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const { userGoals } = useUser();
  const { weightData, progress } = useWeightData(userGoals);
  const { notificationsEnabled, toggleNotifications } = useNotifications();
  
  // Extract username from email
  const userName = user?.email?.split('@')[0] || "usuário";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <UserHeader
              userName={userName}
              notificationsEnabled={notificationsEnabled}
              onToggleNotifications={toggleNotifications}
              onSignOut={signOut}
            />
            
            <DashboardStats 
              userGoals={userGoals}
              progress={progress}
            />
            
            <DashboardTabs weightData={weightData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
