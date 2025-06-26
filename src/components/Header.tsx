
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-primary-500 font-display font-bold text-2xl">
            GlowSlim
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-primary-500 transition-colors">
            Início
          </Link>
          <Link to="/#como-funciona" className="font-medium hover:text-primary-500 transition-colors">
            Como Funciona
          </Link>
          <Link to="/#depoimentos" className="font-medium hover:text-primary-500 transition-colors">
            Depoimentos
          </Link>
        </nav>
        <Button 
          asChild
          className="bg-orange hover:bg-orange-600 text-white font-medium"
        >
          <Link to="/onboarding">
            Começar Agora
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
