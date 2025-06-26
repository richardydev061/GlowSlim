
import React from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationsToggle from "./NotificationsToggle";

interface UserHeaderProps {
  userName: string;
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  onSignOut: () => Promise<void>;
}

const UserHeader: React.FC<UserHeaderProps> = ({ 
  userName, 
  notificationsEnabled, 
  onToggleNotifications, 
  onSignOut 
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">Olá, {userName}</h1>
        <p className="text-gray-600">Bem-vindo ao seu dashboard personalizado</p>
      </div>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <NotificationsToggle 
          enabled={notificationsEnabled} 
          onToggle={onToggleNotifications} 
        />
        <Button 
          variant="outline" 
          onClick={onSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  );
};

export default UserHeader;
