
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useUser } from "@/context/UserContext";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OnboardingForm: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserGoals } = useUser();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    currentWeight: "",
    targetWeight: "",
    timeAvailable: "",
    activityLevel: ""
  });
  
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      updateUserGoals({
        gender: formData.gender,
        age: Number(formData.age),
        currentWeight: Number(formData.currentWeight),
        targetWeight: Number(formData.targetWeight),
        timeAvailable: formData.timeAvailable,
        activityLevel: formData.activityLevel
      });
      navigate("/results");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.gender && formData.age;
      case 2:
        return formData.currentWeight && formData.targetWeight;
      case 3:
        return formData.timeAvailable;
      case 4:
        return formData.activityLevel;
      default:
        return false;
    }
  };

  return (
    <Card className="max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle>Seu Plano Personalizado</CardTitle>
        <CardDescription>Passo {step} de 4</CardDescription>
      </CardHeader>
      
      <CardContent>
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="gender">Sexo</Label>
              <RadioGroup 
                value={formData.gender} 
                onValueChange={(value) => handleChange("gender", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feminino" id="feminino" />
                  <Label htmlFor="feminino">Feminino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masculino" id="masculino" />
                  <Label htmlFor="masculino">Masculino</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Idade</Label>
              <Input
                id="age"
                type="number"
                placeholder="Sua idade"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="currentWeight">Peso Atual (kg)</Label>
              <Input
                id="currentWeight"
                type="number"
                placeholder="Seu peso atual"
                value={formData.currentWeight}
                onChange={(e) => handleChange("currentWeight", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="targetWeight">Peso Desejado (kg)</Label>
              <Input
                id="targetWeight"
                type="number"
                placeholder="Seu peso desejado"
                value={formData.targetWeight}
                onChange={(e) => handleChange("targetWeight", e.target.value)}
              />
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label>Quanto tempo você tem disponível para exercícios?</Label>
              <RadioGroup 
                value={formData.timeAvailable} 
                onValueChange={(value) => handleChange("timeAvailable", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15min" id="15min" />
                  <Label htmlFor="15min">15 minutos por dia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30min" id="30min" />
                  <Label htmlFor="30min">30 minutos por dia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="45min" id="45min" />
                  <Label htmlFor="45min">45 minutos por dia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="60min+" id="60min+" />
                  <Label htmlFor="60min+">1 hora ou mais por dia</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label>Qual seu nível atual de atividade física?</Label>
              <RadioGroup 
                value={formData.activityLevel} 
                onValueChange={(value) => handleChange("activityLevel", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sedentary" id="sedentary" />
                  <Label htmlFor="sedentary">Sedentário (pouco ou nenhum exercício)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Levemente ativo (exercício 1-3 dias/semana)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate">Moderadamente ativo (exercício 3-5 dias/semana)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="active" id="active" />
                  <Label htmlFor="active">Muito ativo (exercício 6-7 dias/semana)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={step === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isStepValid()}
        >
          {step === 4 ? "Finalizar" : "Próximo"} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingForm;
