
import React from "react";
import Header from "@/components/Header";
import OnboardingForm from "@/components/OnboardingForm";
import Footer from "@/components/Footer";

const Onboarding: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Criando seu Plano <span className="text-primary-500">Personalizado</span>
            </h1>
            <p className="text-gray-600">
              Responda algumas perguntas para que possamos criar um plano de emagrecimento específico para suas necessidades.
            </p>
          </div>
          <OnboardingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
