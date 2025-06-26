
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NutritionTips: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dicas de Nutrição</CardTitle>
        <CardDescription>Sugestões para complementar seu plano de treinos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="pb-4 border-b">
            <h3 className="text-lg font-medium mb-2">Café da Manhã</h3>
            <p className="text-gray-600">Opte por proteínas magras (ovos, iogurte grego) e carboidratos complexos (aveia, pão integral). Evite açúcares refinados.</p>
            <div className="mt-2 p-3 bg-green-50 rounded-md">
              <h4 className="font-medium text-green-800">Sugestão</h4>
              <p className="text-sm text-green-700">Omelete de claras com espinafre e aveia com frutas vermelhas</p>
            </div>
          </div>
          
          <div className="pb-4 border-b">
            <h3 className="text-lg font-medium mb-2">Almoço</h3>
            <p className="text-gray-600">Priorize proteínas magras, vegetais coloridos e porções moderadas de carboidratos complexos.</p>
            <div className="mt-2 p-3 bg-green-50 rounded-md">
              <h4 className="font-medium text-green-800">Sugestão</h4>
              <p className="text-sm text-green-700">Filé de frango grelhado, vegetais assados e arroz integral</p>
            </div>
          </div>
          
          <div className="pb-4 border-b">
            <h3 className="text-lg font-medium mb-2">Jantar</h3>
            <p className="text-gray-600">Prefira refeições leves com foco em proteínas e vegetais. Reduza carboidratos à noite.</p>
            <div className="mt-2 p-3 bg-green-50 rounded-md">
              <h4 className="font-medium text-green-800">Sugestão</h4>
              <p className="text-sm text-green-700">Peixe assado com legumes no vapor e salada verde</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Lanches</h3>
            <p className="text-gray-600">Faça pequenos lanches entre as refeições para manter o metabolismo ativo e evitar a fome excessiva.</p>
            <div className="mt-2 p-3 bg-green-50 rounded-md">
              <h4 className="font-medium text-green-800">Sugestões</h4>
              <ul className="text-sm text-green-700 list-disc list-inside">
                <li>Punhado de castanhas (amêndoas, nozes)</li>
                <li>Iogurte grego com frutas</li>
                <li>Maçã com pasta de amendoim</li>
                <li>Palitos de vegetais com hummus</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTips;
