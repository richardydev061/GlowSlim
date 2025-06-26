
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  ShoppingCart
} from "lucide-react";
import { toast } from "sonner";

const CheckoutForm: React.FC = () => {
  const handleCheckout = () => {
    // Here would go actual checkout integration
    toast.success("Compra simulada com sucesso!");
  };

  return (
    <Card className="border-2 border-orange shadow-lg max-w-md w-full mx-auto">
      <CardHeader className="bg-gradient-to-r from-orange to-yellow text-white">
        <CardTitle className="text-center">Potencialize seus Resultados</CardTitle>
        <CardDescription className="text-white/90 text-center">
          Acesso completo ao programa GlowSlim
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm line-through">De R$197</p>
              <p className="text-4xl font-bold text-orange">R$97</p>
              <p className="text-gray-600 text-sm">Pagamento único</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <Check className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>Plano nutricional personalizado com receitas exclusivas</p>
          </div>
          <div className="flex items-start">
            <Check className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>Acesso ao aplicativo de acompanhamento completo</p>
          </div>
          <div className="flex items-start">
            <Check className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>Suporte nutricional com especialistas por 30 dias</p>
          </div>
          <div className="flex items-start">
            <Check className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>35 vídeos de treinos guiados com instrutores</p>
          </div>
          <div className="flex items-start">
            <Check className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>Comunidade exclusiva de suporte e motivação</p>
          </div>
          <div className="flex items-start">
            <Check className="text-accent mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>Garantia de 30 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col">
        <Button 
          onClick={handleCheckout}
          className="w-full bg-orange hover:bg-orange-600 text-lg py-6"
        >
          <ShoppingCart className="mr-2 h-5 w-5" /> Comprar Agora
        </Button>
        <p className="text-center text-gray-500 text-sm mt-4">
          Pagamento 100% seguro via PIX, cartão ou boleto
        </p>
      </CardFooter>
    </Card>
  );
};

export default CheckoutForm;
