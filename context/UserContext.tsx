
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface UserGoals {
  currentWeight?: number;
  targetWeight?: number;
  timeAvailable?: string;
  activityLevel?: string;
  age?: number;
  gender?: string;
}

interface UserContextType {
  userGoals: UserGoals;
  updateUserGoals: (goals: Partial<UserGoals>) => void;
  resetUserGoals: () => void;
}

const initialUserGoals: UserGoals = {};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userGoals, setUserGoals] = useState<UserGoals>(initialUserGoals);

  const updateUserGoals = (goals: Partial<UserGoals>) => {
    setUserGoals(prev => ({ ...prev, ...goals }));
  };

  const resetUserGoals = () => {
    setUserGoals(initialUserGoals);
  };

  return (
    <UserContext.Provider value={{ userGoals, updateUserGoals, resetUserGoals }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
