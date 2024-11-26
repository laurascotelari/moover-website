import { useState } from "react";
import { MagnifyingGlass, ShoppingCart, Moon, List, X } from "phosphor-react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center px-5 py-3 bg-black text-primary-lighter w-full">
      <div className="w-full flex justify-between items-center lg:order-1 order-1">
        <button
          className="lg:hidden text-primary-lighter text-xl hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <List size={24} weight="bold" />
        </button>
        
        <Link to="/" className="flex justify-center items-center lg:justify-start flex-grow">
          <img
            src="src/assets/img_logo_mais_claro.png"
            alt="Moover Logo"
            className="h-10 mx-auto"
          />
        </Link>

      <nav className="hidden lg:flex lg:flex-row lg:space-x-16 lg:space-y-0  text-white mr-10">
        <a
          href="#formatura"
          className={`hover:underline text-xl text-primary-lighter`}
        >
          Formatura
        </a>
        <a
          href="#debutante"
          className={`hover:underline text-xl text-primary-lighter`}
        >
          Debutante
        </a>
        <a
          href="#casamento"
          className={`hover:underline text-xl text-primary-lighter`}
        >
          Casamento
        </a>
        <a
          href="#eventos"
          className={`hover:underline text-xl text-primary-lighter`}
        >
          Eventos
        </a>
      </nav>
        <div className="flex space-x-4 text-xl text-primary-lighter">
          <button className="hover:text-white transition-colors font-bold">A+</button>
          <button className="hover:text-white transition-colors">
            <Moon size={24} weight="bold" />
          </button>
          <button
            className="hover:text-white transition-colors"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingCart size={24} weight="bold" />
          </button>
          <button className="hidden lg:flex hover:text-white transition-colors">
            <MagnifyingGlass size={24} weight="bold" />
          </button>
        </div>
      </div>

      <div className="lg:hidden mt-4 w-4/5 max-w-md mx-auto flex items-center border-2 border-primary-lighter rounded-lg order-2">
        <MagnifyingGlass size={24} className="text-primary-lighter mx-3" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full px-4 py-2 bg-black text-primary-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-lighter border-hidden"
        />
      </div>

      <nav
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#B08F43] flex flex-col items-center justify-start space-y-8 text-primary-lighter z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} weight="bold" />
        </button>

        <a
          href="#formatura"
          className="hover:underline text-white text-xl border-b border-white py-2 w-1/4 text-center inline-block max-w-[90%]"
        >
          Formatura
        </a>
        <a
          href="#debutante"
          className="hover:underline text-white text-xl border-b border-white py-2 w-1/4 text-center inline-block max-w-[90%]"
        >
          Debutante
        </a>
        <a
          href="#casamento"
          className="hover:underline text-white text-xl border-b border-white py-2 w-1/4 text-center inline-block max-w-[90%]"
        >
          Casamento
        </a>
        <a
          href="#eventos"
          className="hover:underline text-white text-xl border-b border-white py-2 w-1/4 text-center inline-block max-w-[90%]"
        >
          Eventos
        </a>
      </nav>


    </header>
  );
};

export default Header;
