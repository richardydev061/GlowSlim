
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTM2IDE4YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyeiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')]
      opacity-5"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white text-shadow mb-6 animate-fade-up">
            Transforme seu Corpo com um Plano de Emagrecimento <span className="text-yellow-400">100% Personalizado</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Descubra o método científico que já ajudou mais de 10.000 brasileiros a perderem peso de forma saudável e duradoura, sem dietas restritivas ou exercícios excessivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              asChild
              size="lg"
              className="bg-orange hover:bg-orange-600 text-white font-bold text-lg pulse-button"
            >
              <Link to="/onboarding">
                Criar Meu Plano Grátis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-white/80 mt-4 text-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Leva apenas 2 minutos e é totalmente gratuito
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default LandingHero;
