
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GlowSlim</h3>
            <p className="text-gray-300 text-sm">
              Soluções personalizadas para emagrecimento saudável e duradouro.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Início</Link></li>
              <li><Link to="/#como-funciona" className="text-gray-300 hover:text-white text-sm">Como Funciona</Link></li>
              <li><Link to="/#depoimentos" className="text-gray-300 hover:text-white text-sm">Depoimentos</Link></li>
              <li><Link to="/onboarding" className="text-gray-300 hover:text-white text-sm">Criar Plano</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/termos" className="text-gray-300 hover:text-white text-sm">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-300 hover:text-white text-sm">Política de Privacidade</Link></li>
              <li><Link to="/reembolso" className="text-gray-300 hover:text-white text-sm">Política de Reembolso</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">contato@glowslim.com.br</li>
              <li className="text-gray-300 text-sm">+55 (11) 9999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GlowSlim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
