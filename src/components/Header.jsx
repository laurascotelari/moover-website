import { useState } from "react";
import { MagnifyingGlass, ShoppingCart, CircleHalf, List, X } from "phosphor-react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSize } from "../contexts/FontSizeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  let navigate = useNavigate();

  //classes referentes ao tema padrao e o tema de alto contraste
  const {toggleTheme, theme}  = useTheme();

  //tema padrao
  let textColor = "text-primary-lighter";
  let backgroundColor = "bg-black";
  let iconColor = "#EBC059";

  //cores do tema em alto contraste
  if(theme == 'theme2'){
    textColor = "text-black";
    backgroundColor = "bg-white";
    iconColor = "black";
  }

  const {toggleFontSize, fontSize} = useFontSize();

  return (
    <header className={`flex flex-col px-5 py-3 ${backgroundColor} w-full ${textColor}`}>
      <div className="w-full flex justify-between items-center lg:order-1 order-1">
        <button
          className={`lg:hidden text-${fontSize}xl hover:text-white transition-colors ${textColor}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <List size={24} weight="bold" />
        </button>
        
        <Link to="/" className="">
          <img
            src={theme == 'theme1' ? "src/assets/img_logo_mais_claro.png" : "src/assets/img_logo_preto.png"}
            alt="Moover Logo"
            className="h-10 mx-auto"
          />
        </Link>

        <nav className={`hidden lg:flex lg:flex-row lg:space-x-16 lg:space-y-0 text-white mr-10 text-${fontSize}xl`}>
          <a
            href="#formatura"
            className={`hover:underline ${textColor}`}
          >
            Formatura
          </a>
          <a
            href="#debutante"
            className={`hover:underline ${textColor}`}
          >
            Debutante
          </a>
          <a
            href="#casamento"
            className={`hover:underline ${textColor}`}
          >
            Casamento
          </a>
          <a
            href="#eventos"
            className={`hover:underline ${textColor}`}
          >
            Eventos
          </a>
        </nav>

        <div className={`flex space-x-4 text-xl ${textColor}`}>
          <button 
            className="hover:text-white transition-colors font-bold"
            onClick={() => {toggleFontSize(parseInt(fontSize) + 1)}}
          >
            A+
          </button>
          <button 
            className="hover:text-white transition-colors font-bold"
            onClick={() => {toggleFontSize(parseInt(fontSize) - 1)}}
          >
            A-
          </button>
          <button className="hover:text-white transition-colors" onClick={() => {(theme == 'theme1' ? toggleTheme('theme2') : toggleTheme('theme1'))}}>
            <CircleHalf size={24} weight="fill" color={iconColor}/>
          </button>
          <button
            className="hover:text-white transition-colors"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingCart size={24} weight="bold" color={iconColor}/>
          </button>
          <button 
            className="hidden lg:flex hover:text-white transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? <X size={24} weight="bold" color={iconColor} /> : <MagnifyingGlass size={24} weight="bold" color={iconColor}/>}
          </button>
        </div>
      </div>


<div className="lg:hidden mt-4 w-4/5 max-w-md mx-auto flex items-center border-2 border-primary-lighter rounded-lg order-2">
 <MagnifyingGlass size={24} className="text-primary-lighter mx-3" color={iconColor} /> 
 <input type="text" 
 placeholder="Pesquisar..." 
 className="w-full px-4 py-2 bg-black text-primary-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-lighter border-hidden" /> 
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
            {isSearchOpen && (
        <div className=" hidden lg:flex mt-4 w-4/5 max-w-md mx-auto flex items-center border-primary-lighter rounded-lg order-2">
          <div className="w-full max-w-md mx-auto flex items-center border-2 border-primary-lighter rounded-lg">
            <MagnifyingGlass size={24} className="text-primary-lighter mx-3" color={iconColor} />
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full px-4 py-2 bg-black text-primary-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-lighter border-hidden"
            />
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
