
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  image: string;
  text: string;
  weightLost: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, image, text, weightLost, delay }) => {
  return (
    <Card className="animate-fade-up" style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="h-4 w-4" />
              ))}
            </div>
            <p className="text-accent font-semibold text-sm">{weightLost}</p>
          </div>
        </div>
        <p className="text-gray-700 italic">{text}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Histórias de <span className="text-primary-500">Sucesso</span></h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Veja os resultados reais de pessoas que transformaram suas vidas com nosso programa personalizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial 
            name="Mariana Silva"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
            text="Perdi 12kg em 3 meses seguindo o plano personalizado. Os exercícios eram perfeitos para minha rotina agitada e as refeições eram deliciosas!"
            weightLost="Perdeu 12kg em 3 meses"
            delay={0.1}
          />
          <Testimonial 
            name="Carlos Mendes"
            image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200&auto=format&fit=crop"
            text="Depois de tentar várias dietas sem sucesso, finalmente encontrei algo que funcionou. O plano adaptado ao meu estilo de vida foi a chave."
            weightLost="Perdeu 18kg em 5 meses"
            delay={0.3}
          />
          <Testimonial 
            name="Amanda Ferreira"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
            text="Eu não tinha tempo para academia, mas o GlowSlim me deu exercícios que posso fazer em casa. Já perdi 10kg e estou me sentindo incrível!"
            weightLost="Perdeu 10kg em 2 meses"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
