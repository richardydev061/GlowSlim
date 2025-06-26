
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserGoals } from "@/context/UserContext";

interface DashboardStatsProps {
  userGoals: UserGoals;
  progress: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ userGoals, progress }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Meta de Peso</CardTitle>
          <CardDescription>Seu progresso atual</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {userGoals.currentWeight ? userGoals.currentWeight - 2 : 0}kg
            <span className="text-sm font-normal text-gray-500 ml-2">
              / {userGoals.targetWeight}kg (meta)
            </span>
          </div>
          
          <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{progress}% completo</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Dias Ativos</CardTitle>
          <CardDescription>Seu comprometimento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            16 dias
            <span className="text-sm font-normal text-gray-500 ml-2">
              / 30 dias
            </span>
          </div>
          
          <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent rounded-full" 
              style={{ width: "53%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">53% dos dias</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Calorias Queimadas</CardTitle>
          <CardDescription>Estimativa baseada nos treinos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            4.260
            <span className="text-sm font-normal text-gray-500 ml-2">
              kcal este mês
            </span>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Média diária:</span>
              <span className="font-medium">284 kcal</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Melhor dia:</span>
              <span className="font-medium">520 kcal</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
