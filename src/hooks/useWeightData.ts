
import { useState, useEffect } from "react";
import { UserGoals } from "@/context/UserContext";

interface WeightDataPoint {
  week: string;
  weight: number;
}

export const useWeightData = (userGoals: UserGoals) => {
  const [weightData, setWeightData] = useState<WeightDataPoint[]>([]);
  const [progress, setProgress] = useState(0);
  
  // Generate weight data based on user goals
  useEffect(() => {
    if (userGoals.currentWeight && userGoals.targetWeight) {
      const data = generateWeightData(userGoals.currentWeight, userGoals.targetWeight);
      setWeightData(data);
      
      // Simulate progress (normally this would be fetched from database)
      const totalLoss = userGoals.currentWeight - userGoals.targetWeight;
      const currentLoss = 2; // Simulating a loss of 2kg
      const calculatedProgress = Math.min(100, Math.round((currentLoss / totalLoss) * 100));
      setProgress(calculatedProgress);
    }
  }, [userGoals]);

  return { weightData, progress };
};

// Helper function to generate weight data
const generateWeightData = (currentWeight: number, targetWeight: number): WeightDataPoint[] => {
  const data: WeightDataPoint[] = [];
  const weeks = 12;
  const weightDiff = currentWeight - targetWeight;
  const weeklyLoss = weightDiff / weeks;
  
  for (let i = 0; i <= weeks; i++) {
    data.push({
      week: `Semana ${i}`,
      weight: Math.round((currentWeight - (weeklyLoss * i)) * 10) / 10,
    });
  }
  
  return data;
};
