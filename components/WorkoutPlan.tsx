
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { CheckCircle } from "lucide-react";

interface Exercise {
  name: string;
  reps: string;
  sets: number;
  description: string;
}

interface DailyWorkout {
  day: string;
  focus: string;
  exercises: Exercise[];
  notes?: string;
}

const WorkoutPlan: React.FC = () => {
  const { userGoals } = useUser();
  
  const generateWorkoutPlan = (): DailyWorkout[] => {
    const { activityLevel, timeAvailable } = userGoals;
    
    // Generate workout plan based on user profile
    const baseWorkouts = [
      {
        day: "Segunda-feira",
        focus: "Pernas e Glúteos",
        exercises: [
          {
            name: "Agachamento",
            reps: activityLevel === "sedentary" ? "8-10" : "12-15",
            sets: timeAvailable === "15min" ? 2 : timeAvailable === "30min" ? 3 : 4,
            description: "Posicione os pés na largura dos ombros, desça como se fosse sentar em uma cadeira."
          },
          {
            name: "Afundo",
            reps: activityLevel === "sedentary" ? "6-8" : "10-12",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Dê um passo à frente com uma perna e dobre ambos os joelhos até quase tocar o chão."
          },
          {
            name: "Elevação de Panturrilha",
            reps: "15-20",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Em pé, eleve os calcanhares ficando na ponta dos pés."
          }
        ]
      },
      {
        day: "Terça-feira",
        focus: "Cardio Leve",
        exercises: [
          {
            name: "Caminhada",
            reps: timeAvailable === "15min" ? "15 minutos" : timeAvailable === "30min" ? "25 minutos" : "40 minutos",
            sets: 1,
            description: "Caminhada em ritmo moderado."
          },
          {
            name: "Jumping Jacks",
            reps: "30 segundos",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Pule abrindo pernas e braços simultaneamente."
          }
        ]
      },
      {
        day: "Quarta-feira",
        focus: "Braços e Peito",
        exercises: [
          {
            name: "Flexão de Braço",
            reps: activityLevel === "sedentary" ? "5-8" : activityLevel === "light" ? "8-10" : "10-15",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Versão adaptada com joelhos no chão para iniciantes."
          },
          {
            name: "Tríceps no Banco",
            reps: "10-12",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Use um sofá ou cadeira para apoiar as mãos e descer o corpo."
          }
        ]
      },
      {
        day: "Quinta-feira",
        focus: "Descanso Ativo",
        exercises: [
          {
            name: "Alongamentos Gerais",
            reps: "30 segundos cada",
            sets: 1,
            description: "Alongue principais grupos musculares."
          },
          {
            name: "Respiração e Relaxamento",
            reps: "5 minutos",
            sets: 1,
            description: "Respiração profunda e consciente."
          }
        ],
        notes: "Dia de recuperação - foque em hidratação e descanso adequado."
      },
      {
        day: "Sexta-feira",
        focus: "Core e Abdômen",
        exercises: [
          {
            name: "Prancha Abdominal",
            reps: activityLevel === "sedentary" ? "20 segundos" : activityLevel === "light" ? "30 segundos" : "45 segundos",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Mantenha o corpo alinhado, apoiado nos antebraços e pontas dos pés."
          },
          {
            name: "Abdominal Tradicional",
            reps: "10-15",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Deitado com joelhos dobrados, eleve o tronco em direção às pernas."
          },
          {
            name: "Abdominal Bicicleta",
            reps: "10-12 por lado",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Deitado, toque o cotovelo no joelho oposto alternadamente."
          }
        ]
      },
      {
        day: "Sábado",
        focus: "Cardio Intenso",
        exercises: [
          {
            name: "Corrida/Caminhada Intervalada",
            reps: timeAvailable === "15min" ? "12 minutos" : timeAvailable === "30min" ? "20 minutos" : "30 minutos",
            sets: 1,
            description: "Alterne 1 minuto de corrida com 2 minutos de caminhada."
          },
          {
            name: "Burpees",
            reps: activityLevel === "sedentary" ? "5" : activityLevel === "light" ? "8" : "12",
            sets: timeAvailable === "15min" ? 2 : 3,
            description: "Movimento completo: agachamento, prancha, flexão, salto."
          }
        ]
      },
      {
        day: "Domingo",
        focus: "Descanso Total",
        exercises: [
          {
            name: "Descanso",
            reps: "Dia todo",
            sets: 1,
            description: "Permita que seu corpo recupere totalmente."
          }
        ],
        notes: "Aproveite para planejar suas refeições da semana seguinte."
      }
    ];
    
    // Add or remove exercises based on activity level and time available
    if (activityLevel === "moderate" || activityLevel === "active") {
      baseWorkouts[0].exercises.push({
        name: "Elevação de Quadril",
        reps: "12-15",
        sets: 3,
        description: "Deitado de costas, pés no chão, eleve o quadril formando uma linha reta com o corpo."
      });
      
      baseWorkouts[2].exercises.push({
        name: "Supino com Halteres",
        reps: "10-12",
        sets: 3,
        description: "Use garrafas de água como pesos se não tiver halteres."
      });
    }
    
    if (timeAvailable === "60min+") {
      baseWorkouts[1].exercises.push({
        name: "Pular Corda",
        reps: "5 minutos",
        sets: 1,
        description: "Saltos contínuos com ritmo moderado."
      });
      
      baseWorkouts[5].exercises.push({
        name: "Mountain Climbers",
        reps: "30 segundos",
        sets: 3,
        description: "Em posição de prancha, alterne levando os joelhos em direção ao peito."
      });
    }
    
    return baseWorkouts;
  };
  
  const workoutPlan = generateWorkoutPlan();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-lg mb-8 text-white">
        <h3 className="font-bold text-xl mb-2">Seu Plano de Treino Personalizado</h3>
        <p>
          Criamos este plano especificamente para suas necessidades, considerando seu nível de atividade 
          atual e o tempo que você tem disponível para treinar.
        </p>
      </div>
      
      {workoutPlan.map((workout, index) => (
        <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="flex justify-between items-center">
              <span>{workout.day}</span>
              <span className="text-accent text-sm font-medium">{workout.focus}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {workout.exercises.map((exercise, eIndex) => (
                <div key={eIndex} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{exercise.name}</h4>
                      <p className="text-sm text-gray-600">{exercise.description}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p><span className="font-medium">{exercise.sets}</span> séries</p>
                      <p><span className="font-medium">{exercise.reps}</span> repetições</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {workout.notes && (
                <div className="mt-4 bg-blue-50 p-3 rounded-md flex items-start">
                  <CheckCircle className="text-primary-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{workout.notes}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      
      <div className="bg-gray-50 p-6 rounded-lg mt-6 border">
        <h3 className="font-bold mb-3">Dicas para Maximizar seus Resultados</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>Mantenha-se hidratado bebendo pelo menos 2 litros de água por dia</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>Durma pelo menos 7-8 horas por noite para recuperação adequada</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>Tente fazer suas refeições em horários regulares</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>Aumente gradualmente a intensidade dos exercícios a cada semana</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkoutPlan;
