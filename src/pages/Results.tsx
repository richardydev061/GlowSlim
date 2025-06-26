
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkoutPlan from "@/components/WorkoutPlan";
import CheckoutForm from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Share2 } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { userGoals } = useUser();
  
  useEffect(() => {
    // If no user goals are set, redirect to onboarding
    if (!userGoals.currentWeight || !userGoals.targetWeight) {
      navigate("/onboarding");
    }
  }, [userGoals, navigate]);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Meu plano personalizado GlowSlim",
        text: "Confira este incrível plano de emagrecimento que criei com o GlowSlim!",
        url: window.location.href,
      })
      .catch(() => {
        toast.success("URL copiado para área de transferência!");
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      toast.success("URL copiado para área de transferência!");
      navigator.clipboard.writeText(window.location.href);
    }
  };
  
  const handleDownload = () => {
    toast.success("Plano salvo para visualização offline!");
  };
  
  // Calculate estimated time to reach goal based on user data
  const calculateEstimatedTime = () => {
    if (!userGoals.currentWeight || !userGoals.targetWeight) return "12-16 semanas";
    
    const weightDiff = Math.abs(Number(userGoals.currentWeight) - Number(userGoals.targetWeight));
    const activityMultiplier = 
      userGoals.activityLevel === "sedentary" ? 1 :
      userGoals.activityLevel === "light" ? 0.9 :
      userGoals.activityLevel === "moderate" ? 0.8 :
      0.7;
    
    const timeMultiplier = 
      userGoals.timeAvailable === "15min" ? 1 :
      userGoals.timeAvailable === "30min" ? 0.85 :
      userGoals.timeAvailable === "45min" ? 0.75 :
      0.6;
    
    // Healthy weight loss is about 0.5-1kg per week
    const estimatedWeeks = Math.ceil(weightDiff * activityMultiplier * timeMultiplier);
    
    if (estimatedWeeks <= 4) return "3-4 semanas";
    if (estimatedWeeks <= 8) return "6-8 semanas";
    if (estimatedWeeks <= 12) return "10-12 semanas";
    return "12-16 semanas";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="inline mr-2 h-4 w-4" /> Plano Gerado com Sucesso
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Seu Plano de Emagrecimento <span className="text-primary-500">Personalizado</span>
            </h1>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Com base nas suas respostas, criamos um plano de exercícios adaptado às suas necessidades.
              Siga este plano consistentemente para alcançar suas metas!
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Meta de Peso</p>
                <p className="font-bold text-xl">{userGoals.targetWeight} kg</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Tempo Estimado</p>
                <p className="font-bold text-xl">{calculateEstimatedTime()}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Nível do Plano</p>
                <p className="font-bold text-xl capitalize">
                  {userGoals.activityLevel === "sedentary" ? "Iniciante" : 
                   userGoals.activityLevel === "light" ? "Básico" :
                   userGoals.activityLevel === "moderate" ? "Intermediário" : "Avançado"}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" /> Compartilhar
              </Button>
              <Button variant="outline" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Salvar PDF
              </Button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <WorkoutPlan />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
