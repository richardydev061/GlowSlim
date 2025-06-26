
import { useState } from "react";

export const useNotifications = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
    // Here you would normally update the preference in the database
  };
  
  return { notificationsEnabled, toggleNotifications };
};
