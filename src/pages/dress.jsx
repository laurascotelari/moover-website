// import CarouselDefault from "../components/Carousel"
import { useState } from "react";
import {
  WhatsappLogo,
  InstagramLogo,
  WarningCircle,
} from "@phosphor-icons/react";
import Carrossel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1 from "../assets/dresses/img_vestido1.png";
import image2 from "../assets/dresses/img_vestido2.png";
import image3 from "../assets/dresses/img_vestido3.png";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSize } from "../contexts/FontSizeContext";

const Dress = () => {
  //classes referentes ao tema padrao e o tema de alto contraste
  const { toggleTheme, theme } = useTheme();
  const { toggleFontSize, fontSize } = useFontSize();

  //tema padrao
  let textColor = "text-primary-darker";
  let borderColor = "border-primary-darker";
  let secundaryTextColor = "text-black";
  let tertiaryTextColor = "text-white";
  let bgColor = "bg-white";
  let secundaryBgColor = "bg-primary-darker";
  let iconColor = "#584424";

  //cores do tema em alto contraste
  if (theme == 'theme2') {
    textColor = "text-white";
    secundaryTextColor = "text-white";
    tertiaryTextColor = "text-black";
    borderColor = "border-white";
    bgColor = "bg-black";
    secundaryBgColor = "bg-white";
    iconColor = "white";
  }

  const images = [image1, image2, image3];

  const [count, setCount] = useState(1);
  const [cep, setCep] = useState("");
  const [isValid, setIsValid] = useState(true); // Para controle de validade
  const [showMessage, setShowMessage] = useState(false);


  function handleFormSubmit(e) {
    e.preventDefault();

    const colorSelected = document.querySelector('input[name="color"]:checked');
    const sizeSelected = document.querySelector('input[name="size"]:checked');

    const colorError = document.getElementById("color-error");
    const sizeError = document.getElementById("size-error");

    colorError.classList.add("hidden");
    sizeError.classList.add("hidden");

    let isValid = true;

    if (!colorSelected) {
      colorError.classList.remove("hidden");
      isValid = false;
    }

    if (!sizeSelected) {
      sizeError.classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      e.target.submit();
    }
  }

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleFreteSubmit = () => {
    const cepRegex = /^[0-9]{8}$/; // Verifica exatamente 8 números

    if (!cepRegex.test(cep)) {
      setIsValid(false); // Marca como inválido se o CEP não for válido
      setShowMessage(false); // Esconde a mensagem se o CEP for inválido
    } else {
      setIsValid(true); // Marca como válido se o CEP for válido
      setShowMessage(true); // Exibe a mensagem quando o CEP for válido
    }
  };

  return (
    <div className={`${bgColor}`}>
      <Header />
      <div className="min-h-screen lg:grid lg:grid-cols-2 mt-20 font-montserrat px-4 md:px-8">
        <div className="mx-auto max-w-xl sm:max-w-full">
          <p className={`text-${fontSize}xl ${textColor}`}>
            home/
            <span className={` lg:text-${fontSize}xl font-semibold`}>
              {" "}
              Vestido Fenda
            </span>
          </p>
          <div className="mt-4 lg:mt-10">
            <Carrossel images={images} />
          </div>
        </div>
        <main className="mx-auto max-w-xl">
          <div className="mt-5">
            <p className={`text-${fontSize}lg ${textColor}`}>6059_309</p>
            <h1 className={`text-${fontSize}xl lg:text-${fontSize}xl font-semibold ${textColor} mt-1`}>
              Vestido De Festa Longo com Fenda Lateral e Manga Longa{" "}
            </h1>
            <h2 className={`text-${fontSize}lg lg:text-${fontSize}xl font-medium ${textColor} mt-6 lg:mt-8`}>
              R$ 350,00
              <span className={`text-${fontSize}sm lg:text-${fontSize}base font-normal ${secundaryTextColor} ml-2`}>
                10x de 35,00 sem juros
              </span>
            </h2>

            <form action="" onSubmit={(e) => handleFormSubmit(e)}>
              <div className="space-y-6 mt-6">
                <div>
                  <h2 className={`text-${fontSize}lg lg:text-${fontSize}xl font-medium ${textColor} mb-2`}>
                    Cor
                  </h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <label htmlFor="pink" className="cursor-pointer" tabIndex="0">
                      <input
                        type="radio"
                        id="pink"
                        name="color"
                        value="pink"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-dress-pink flex items-center justify-center border-2 border-gray-300 rounded-sm font-medium peer-checked:border-[3.5px] peer-checked:border-black" />
                    </label>
                    <label htmlFor="green" className="cursor-pointer" tabIndex="0">
                      <input
                        type="radio"
                        id="green"
                        name="color"
                        value="green"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-dress-green flex items-center justify-center border-2 border-gray-300 rounded-sm font-medium peer-checked:border-[3.5px] peer-checked:border-black"/>
                    </label>
                    <label htmlFor="orange" className="cursor-pointer" tabIndex="0">
                      <input
                        type="radio"
                        id="orange"
                        name="color"
                        value="orange"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-dress-orange flex items-center justify-center border-2 border-gray-300 rounded-sm font-medium peer-checked:border-[3.5px] peer-checked:border-black"/>
                    </label>
                    <span
                      id="color-error"
                      className={`flex items-center gap-2 ml-4 text-red-500 text-${fontSize}xs lg:text-${fontSize}sm font-semibold hidden`}
                    >
                      <WarningCircle size={20} className="flex-shrink-0" />
                      <span className="leading-none">Selecione uma cor.</span>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <h2 className={`text-${fontSize}lg lg:text-${fontSize}xl font-medium ${textColor} mb-2`}>
                      Tamanho
                    </h2>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <label htmlFor="p" className="cursor-pointer" tabIndex="0">
                      <input
                        type="radio"
                        id="p"
                        name="size"
                        value="P"
                        className="hidden peer"
                      />
                      <span className={`w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center ${secundaryBgColor} border-2 border-gray-300 rounded-sm ${tertiaryTextColor} text-${fontSize}sm lg:text-${fontSize}lg font-medium peer-checked:border-[3.5px] peer-checked:border-black`}>
                        P
                      </span>
                    </label>
                    <label htmlFor="m" className="cursor-pointer" tabIndex="0" >
                      <input
                        type="radio"
                        id="m"
                        name="size"
                        value="M"
                        className="hidden peer"
                      />
                      <span className={`w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center ${secundaryBgColor} border-2 border-gray-300 rounded-sm ${tertiaryTextColor} text-${fontSize}sm lg:text-${fontSize}lg font-medium peer-checked:border-[3.5px] peer-checked:border-black`}>
                        M
                      </span>
                    </label>
                    <label htmlFor="g" className="cursor-pointer" tabIndex="0">
                      <input
                        type="radio"
                        id="g"
                        name="size"
                        value="G"
                        className="hidden peer"
                      />
                      <span className={`w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center ${secundaryBgColor} border-2 border-gray-300 rounded-sm ${tertiaryTextColor} text-${fontSize}sm lg:text-${fontSize}lg font-medium peer-checked:border-[3.5px] peer-checked:border-black`}>
                        G
                      </span>
                    </label>
                    <span
                      id="size-error"
                      className={`flex items-center gap-2 ml-4 text-red-500 text-${fontSize}xs lg:text-${fontSize}sm font-semibold hidden`}
                    >
                      <WarningCircle size={20} className="flex-shrink-0" />
                      Selecione um tamanho.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className={`flex items-center justify-between border ${borderColor} rounded-sm w-full h-10 px-1`}>
                  <button
                    type="button"
                    className={`text-${fontSize}xl w-10 h-10 flex items-center justify-center ${secundaryTextColor}`}
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))} // Evita números negativos
                  >
                    -
                  </button>
                  <span className={`text-${fontSize}xl mx-4 ${secundaryTextColor}`}>{count}</span>
                  <button
                    type="button"
                    className={`text-${fontSize}xl w-10 h-10 flex items-center justify-center ${secundaryTextColor}`}
                    onClick={() => setCount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`text-${fontSize}md lg:text-${fontSize}lg ${tertiaryTextColor} ${secundaryBgColor} font-medium mt-4 h-10 w-full rounded-md hover:bg-btn-hover`}
              >
                COMPRAR
              </button>
            </form>
          </div>

          <div className={`h-px ${secundaryBgColor}/40 mt-7`}></div>

          <div className={`mt-6 text-${fontSize}md`}>
            <h2 className={`text-${fontSize}md font-semibold ${textColor}`}>
              DESCRIÇÃO
            </h2>

            <p className={`text-${fontSize}sm  text-justify ${secundaryTextColor} mt-5`}>
              Vestido longo de festa, a epítome da elegância com o nosso
              deslumbrante modelo. Este vestido emana sensualidade onde quer que
              você vá, destacando-se com um sedutor decote tomara que caia,
              complementado por um corset que realça suas curvas. Feito sob
              medida para abraçar delicadamente cada contorno do seu corpo,
              apresenta uma ousada fenda na perna e um deslumbrante corte
              sereia. É a escolha ideal para qualquer ocasião em que você deseje
              deixar uma impressionante marca de sofisticação e beleza.
            </p>

            <h3 className={`text-${fontSize}md  font-semibold ${bgColor} mt-4 ${secundaryTextColor}`}>
              Detalhes:
            </h3>
            <ul className={`list-disc ml-7 text-${fontSize}sm lg:text-${fontSize}lg ${secundaryTextColor}`}>
              <li>Drapeado na cintura</li>
              <li>Tomara que caia</li>
              <li>Barbatanas</li>
              <li>Corset</li>
              <li>Fenda</li>
            </ul>

            <h3 className={`text-${fontSize}md lg:text-${fontSize}lg font-semibold ${textColor} mt-4`}>
              Ideal para ocasiões:
            </h3>
            <ul className={`list-disc ml-7 text-${fontSize}sm lg:text-${fontSize}lg ${secundaryTextColor}`}>
              <li>Casamento no campo</li>
              <li>Casamento de dia</li>
              <li>Casamento a noite</li>
              <li>Eventos ao ar livre</li>
              <li>Casamento na praia</li>
              <li>Formatura</li>
            </ul>

            <div className="mt-5">
              <div>
                <details className={`open:shadow-lg p-4 border ${borderColor}/40`}>
                  <summary className={`text-${fontSize}sm lg:text-${fontSize}base leading-6 ${textColor} font-semibold select-none`}>
                    Especificações Técnicas
                  </summary>
                  <div className={`mt-3 text-${fontSize}sm lg:text-${fontSize}md leading-6 space-y-2 ${textColor}`}>
                    <p>Composição: 89% Poliamida 11% Elastano</p>
                    <p>É um tecido maleável e com bastante elasticidade, pois possui elastano em sua composição. Possui textura lisa, com um leve efeito escorregadio e fica perfeito em vestidos de festa ajustados ou fluidos.</p>
                    <p>Forro: 100% Poliéster</p>
                    <p>Bojo: Não</p>
                    <p>Fecho: Zíper Invisível</p>
                  </div>
                </details>
              </div>

              <div>
                <details className={`open:${bgColor} open:ring-1 open:ring-black/5 open:shadow-lg p-4 border ${borderColor}/40`}>
                  <summary className={`text-${fontSize}sm lg:text-${fontSize}base leading-6 ${textColor} font-semibold select-none`}>
                    Medidas da Modelo
                  </summary>
                  <div className={`mt-3 text-${fontSize}sm lg:text-${fontSize}md leading-6 space-y-2 ${textColor}`}>
                    <p>Modelo está vestindo tamanho 38 (P)</p>
                    <p>Altura 1.77m</p>
                    <p>Busto 82cm</p>
                    <p>Cintura 63cm</p>
                    <p>Quadril 90cm</p>
                  </div>
                </details>
              </div>

              <div>
                <details className={`open:${bgColor} open:ring-1 open:ring-black/5 open:shadow-lg p-4 border ${borderColor}/40`}>
                  <summary className={`text-${fontSize}sm lg:text-${fontSize}sm leading-6 ${textColor} font-semibold select-none`}>
                    Cuidados!
                  </summary>
                  <div className={`mt-3 text-${fontSize}sm lg:text-${fontSize}md leading-6 space-y-2 ${textColor}`}>
                    <p>Siga as instruções da etiqueta de lavagem. </p>
                    <p>
                      Seu vestido não deverá ser lavado ou seco em máquina.{" "}
                    </p>
                    <p>
                      Recomendamos a lavagem a mão, preferencialmente com a peça
                      ao avesso.{" "}
                    </p>
                    <p>Secar à sombra </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className={`h-px ${secundaryBgColor}/40 mt-7`}></div>

          <div className="mt-6">
            <h2 className={`text-${fontSize}lg lg:text-${fontSize}xl font-medium ${textColor}`}>
              Frete
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 lg:gap-11">
              <input
                type="text"
                placeholder="Digite seu CEP..."
                value={cep}
                onChange={handleCepChange}
                className={`${bgColor} text-${fontSize}sm lg:text-${fontSize}base border ${borderColor} rounded-sm w-[317px] h-12 placeholder:font-medium placeholder:${secundaryTextColor}/400 p-4`}
              />
              <button
                className={`text-${fontSize}sm lg:text-${fontSize}base ${tertiaryTextColor} ${secundaryBgColor} font-medium h-12 w-[226px] rounded-md hover:bg-btn-hover`}
                onClick={handleFreteSubmit}
              >
                CALCULAR
              </button>
            </div>
            {!isValid && (
              <span
                id="cep-error"
                className={`flex items-center gap-2 mt-4 text-red-500 text-xs lg:text-${fontSize}sm font-semibold`}
              >
                <WarningCircle size={20} className="flex-shrink-0" />
                Por favor, digite um CEP válido.
              </span>
            )}
            {showMessage && (
              <div
                id="cep-error"
                className={`flex justify-between items-center gap-2 mt-4 text-${fontSize}sm`}
              >
                <p className="flex-1 text-left">Retire na loja</p>
                <p className="flex-1 text-right font-semibold">Grátis</p>
              </div>
            )}
          </div>

          <div className={`h-px ${secundaryBgColor}/40 mt-7`}></div>

          <div className="mt-5">
            <h2 className={`text-${fontSize}xl font-medium ${textColor}`}>
              Compartilhar
            </h2>
            <div className="flex items-center gap-7 mt-3 mb-3">
              <a href="#">
                <InstagramLogo size={43} color={iconColor} />
              </a>
              <a href="#">
                <WhatsappLogo size={43} color={iconColor} />
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dress;
