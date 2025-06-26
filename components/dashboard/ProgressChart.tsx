
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

interface ProgressChartProps {
  weightData: Array<{
    week: string;
    weight: number;
  }>;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ weightData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progresso de Peso</CardTitle>
        <CardDescription>Acompanhe sua evolução ao longo das semanas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={weightData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="weight" 
                stroke="#390099" 
                strokeWidth={2} 
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
