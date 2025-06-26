
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";
import { toast } from "sonner";

interface NotificationsToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const NotificationsToggle: React.FC<NotificationsToggleProps> = ({ enabled, onToggle }) => {
  const handleToggle = async () => {
    try {
      onToggle();
      
      if (!enabled) {
        toast.success("Notificações ativadas com sucesso!");
      } else {
        toast.success("Notificações desativadas.");
      }
    } catch (error) {
      console.error("Erro ao atualizar preferências de notificação:", error);
      toast.error("Erro ao atualizar preferências de notificação.");
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleToggle}
    >
      {enabled ? (
        <>
          <BellOff className="mr-2 h-4 w-4" />
          Desativar notificações
        </>
      ) : (
        <>
          <Bell className="mr-2 h-4 w-4" />
          Ativar notificações
        </>
      )}
    </Button>
  );
};

export default NotificationsToggle;
