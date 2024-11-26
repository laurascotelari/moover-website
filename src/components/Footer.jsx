import { InstagramLogo, FacebookLogo, WhatsappLogo, MapPin } from "phosphor-react"; // Importando ícones do Phosphor

const Footer = () => {
  return (
    <footer className="bg-black text-primary-lighter px-8 py-10"> {/* Aumentado py para 10 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
        {/* Loja Física */}
        <div>
          <h3 className="text-lg font-bold mb-2">Loja Física</h3>
          <div className="flex items-start space-x-2">
            <MapPin size={45} weight="fill" className="mt-1" /> {/* Ícone do Pin */}
            <div>
              <p>R. Bernardino de Campos, 2940 - Vila Maceno</p>
              <p>São José do Rio Preto - SP, 15015-300</p>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
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

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <p className="mb-3">Cadastre-se e receba nossas novidades</p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Digite seu e-mail..."
              className="flex-1 px-4 py-2 bg-black border border-primary-lighter text-primary-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-primary-lighter text-black px-4 py-2 rounded-md font-bold hover:bg-white transition"
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
