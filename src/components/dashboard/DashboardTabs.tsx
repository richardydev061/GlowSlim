
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgressChart from "./ProgressChart";
import NutritionTips from "./NutritionTips";
import WorkoutPlan from "@/components/WorkoutPlan";
import WorkoutPlanExport from "./WorkoutPlanExport";

interface DashboardTabsProps {
  weightData: Array<{
    week: string;
    weight: number;
  }>;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ weightData }) => {
  return (
    <Tabs defaultValue="progresso" className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-3 mb-4">
        <TabsTrigger value="progresso">Progresso</TabsTrigger>
        <TabsTrigger value="plano">Seu Plano</TabsTrigger>
        <TabsTrigger value="nutricao">Nutrição</TabsTrigger>
      </TabsList>
      
      <TabsContent value="progresso">
        <ProgressChart weightData={weightData} />
      </TabsContent>
      
      <TabsContent value="plano">
        <div id="workout-plan">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Seu Plano de Treinos</h2>
            <WorkoutPlanExport />
          </div>
          <WorkoutPlan />
        </div>
      </TabsContent>
      
      <TabsContent value="nutricao">
        <NutritionTips />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
