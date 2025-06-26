
import React from "react";
import { CheckCircle } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, delay }) => {
  return (
    <div 
      className="flex flex-col items-center text-center p-6 animate-fade-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProgramSteps: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Como o <span className="text-primary-500">GlowSlim</span> Funciona</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nosso método utiliza algoritmos avançados para criar um plano personalizado que se adapta ao seu corpo e estilo de vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Step 
            number={1}
            title="Perfil Personalizado"
            description="Responda algumas perguntas simples sobre seus objetivos, rotina e preferências."
            delay={0.1}
          />
          <Step 
            number={2}
            title="Plano Exclusivo"
            description="Nosso sistema cria um roteiro de exercícios e nutrição adaptado especificamente para você."
            delay={0.3}
          />
          <Step 
            number={3}
            title="Resultados Reais"
            description="Siga o plano e acompanhe sua transformação com resultados visíveis em 30 dias."
            delay={0.5}
          />
        </div>

        <div className="mt-16 bg-white p-6 md:p-10 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h3 className="text-center mb-6">Benefícios do GlowSlim</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <p>Plano 100% personalizado para suas necessidades</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <p>Receitas saborosas que não parecem "dieta"</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <p>Exercícios adaptados ao seu nível de condicionamento</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <p>Suporte nutricional com especialistas</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <p>Aplicativo para acompanhamento diário</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <p>Comunidade de apoio motivacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSteps;
