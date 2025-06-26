
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTM2IDE4YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyeiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')]
      opacity-5"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-shadow mb-6">
            Pronto para Transformar seu Corpo e sua Vida?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Crie seu plano personalizado gratuito agora e descubra o caminho mais eficiente para atingir seus objetivos de emagrecimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild
              size="lg"
              className="bg-orange hover:bg-orange-600 text-white font-bold text-lg pulse-button"
            >
              <Link to="/onboarding">
                Quero Meu Plano Personalizado <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-white mb-4">Oferta por tempo limitado</h4>
            <p className="text-white/90 mb-2">
              Plano completo por apenas <span className="line-through">R$197,00</span>
            </p>
            <p className="text-yellow-400 font-bold text-2xl mb-2">
              R$97,00 <span className="text-white/80 text-sm font-normal">pagamento único</span>
            </p>
            <p className="text-white/80 text-sm">
              Garantia de 30 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
