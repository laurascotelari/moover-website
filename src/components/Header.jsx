import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-3 bg-black text-yellow-400">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="src/assets/img_logo_mais_claro.png" 
          alt="Moover Logo" 
          className="h-10"
        />
      </div>

      {/* Menu */}
      <nav className={`flex-col space-y-4 font-bold text-lg lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 ${
        isMenuOpen ? "flex" : "hidden"
      }`}>
        <a href="#formatura" className="hover:underline">Formatura</a>
        <a href="#debutante" className="hover:underline">Debutante</a>
        <a href="#casamento" className="hover:underline">Casamento</a>
        <a href="#eventos" className="hover:underline">Eventos</a>
      </nav>

      {/* Botão para mobile */}
      <button 
        className="lg:hidden text-xl hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Ícones */}
      <div className="hidden lg:flex space-x-4 text-xl">
        <button className="hover:text-white transition-colors">+A</button>
        <button className="hover:text-white transition-colors">🌓</button>
        <button className="hover:text-white transition-colors">🛒</button>
        <button className="hover:text-white transition-colors">🔍</button>
      </div>
    </header>
  );
};

export default Header;
