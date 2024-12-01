import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { InstagramLogo, FacebookLogo, WhatsappLogo, MapPin } from "phosphor-react"; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  //classes referentes ao tema padrao e o tema de alto contraste
  const {toggleTheme, theme}  = useTheme();

  //tema padrao
  let textColor = "text-primary-lighter";
  let secundaryTextColor = "text-black";
  let bgColor = "bg-black";
  let secundaryBgColor = "bg-[#EBC059]"; 
  let borderColor = "border-[#EBC059]";

  //cores do tema em alto contraste
  if(theme == 'theme2'){
    textColor = "text-black";
    secundaryTextColor = "text-white";
    bgColor = "bg-white";
    borderColor = "border-black";
    secundaryBgColor = "bg-black"; 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setError(""); 
    alert("E-mail enviado com sucesso!");
    setEmail("");
  };

  return (
    <footer className={`${bgColor} ${textColor} px-8 py-10`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-bold mb-2">Loja Física</h3>
          <div className="flex items-start space-x-2">
            <MapPin size={45} weight="fill" className="mt-1" /> 
            <div>
              <p>R. Bernardino de Campos, 2940 - Vila Maceno</p>
              <p>São José do Rio Preto - SP, 15015-300</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Redes Sociais</h3>
          <p className="mb-3">Acompanhe a marca nas redes sociais!</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/moover"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <InstagramLogo size={35} weight="fill" />
            </a>
            <a
              href="https://www.facebook.com/moover"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FacebookLogo size={35} weight="fill" />
            </a>
            <a
              href="https://wa.me/0000000000/moover"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <WhatsappLogo size={35} weight="fill" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <p className="mb-3">Cadastre-se e receba nossas novidades</p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-1 px-4 py-2 ${bgColor} border ${borderColor} ${textColor} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
            />
            {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
            <button
              type="submit"
              className={`${secundaryBgColor} ${secundaryTextColor} px-4 py-2 rounded-md font-bold hover:bg-white transition mt-4`}
            >
              Enviar
            </button>
          </form> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
