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
import image4 from "../assets/dresses/img_vestido4.png";
import image5 from "../assets/dresses/img_vestido5.png";

const Dress = () => {
  const images = [image1, image2, image3, image4, image5];

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
    <div>
      <Header />
      <div className="min-h-screen lg:grid lg:grid-cols-2 mt-20 font-montserrat px-4 md:px-8">
        <div className="mx-auto max-w-xl sm:max-w-full">
          <p className="text-sm text-primary-darker">
            home/
            <span className="text-md lg:text-xl font-semibold">
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
            <p className="text-sm">6059_309</p>
            <h1 className="text-lg lg:text-2xl font-semibold text-primary-darker mt-1">
              Vestido De Festa Longo com Fenda Lateral e Manga Longa{" "}
            </h1>
            <h2 className="text-lg lg:text-2xl font-medium text-primary-darker mt-6 lg:mt-8 ">
              R$ 350,00
              <span className="text-sm lg:text-base font-normal text-black ml-2">
                10x de 35,00 sem juros
              </span>
            </h2>

            <form action="" onSubmit={(e) => handleFormSubmit(e)}>
              <div className="space-y-6 mt-6">
                <div>
                  <h2 className="text-lg lg:text-xl font-medium text-primary-darker mb-2">
                    Cor
                  </h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <label htmlFor="pink" className="cursor-pointer">
                      <input
                        type="radio"
                        id="pink"
                        name="color"
                        value="pink"
                        className="appearance-none peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-dress-pink border-2 border-gray-300 rounded-sm inline-block peer-checked:border-black"></span>
                    </label>
                    <label htmlFor="green" className="cursor-pointer">
                      <input
                        type="radio"
                        id="green"
                        name="color"
                        value="green"
                        className="appearance-none peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-dress-green border-2 border-gray-300 rounded-sm inline-block peer-checked:border-black"></span>
                    </label>
                    <label htmlFor="orange" className="cursor-pointer">
                      <input
                        type="radio"
                        id="orange"
                        name="color"
                        value="orange"
                        className="appearance-none peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-dress-orange border-2 border-gray-300 rounded-sm inline-block peer-checked:border-black"></span>
                    </label>
                    <span
                      id="color-error"
                      className="flex items-center gap-2 ml-4 text-red-500 text-xs lg:text-sm font-semibold hidden"
                    >
                      <WarningCircle size={20} className="flex-shrink-0" />
                      <span className="leading-none">Selecione uma cor.</span>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <h2 className="text-lg lg:text-xl font-medium text-primary-darker mb-2">
                      Tamanho
                    </h2>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <label htmlFor="p" className="cursor-pointer">
                      <input
                        type="radio"
                        id="p"
                        name="size"
                        value="P"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-primary-darker border-2 border-gray-300 rounded-sm text-white text-sm lg:text-lg font-medium peer-checked:border-[3.5px] peer-checked:border-black">
                        P
                      </span>
                    </label>
                    <label htmlFor="m" className="cursor-pointer">
                      <input
                        type="radio"
                        id="m"
                        name="size"
                        value="M"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-primary-darker border-2 border-gray-300 rounded-sm text-white text-sm lg:text-lg font-medium peer-checked:border-[3.5px] peer-checked:border-black">
                        M
                      </span>
                    </label>
                    <label htmlFor="g" className="cursor-pointer">
                      <input
                        type="radio"
                        id="g"
                        name="size"
                        value="G"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-primary-darker border-2 border-gray-300 rounded-sm text-white text-sm lg:text-lg font-medium peer-checked:border-[3.5px] peer-checked:border-black">
                        G
                      </span>
                    </label>
                    <span
                      id="size-error"
                      className="flex items-center gap-2 ml-4 text-red-500 text-xs lg:text-sm font-semibold hidden"
                    >
                      <WarningCircle size={20} className="flex-shrink-0" />
                      Selecione um tamanho.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between border border-black rounded-sm w-full h-10 px-1">
                  <button
                    type="button"
                    className="text-xl w-10 h-10 flex items-center justify-center"
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))} // Evita números negativos
                  >
                    -
                  </button>
                  <span className="text-xl mx-4">{count}</span>
                  <button
                    type="button"
                    className="text-xl w-10 h-10 flex items-center justify-center"
                    onClick={() => setCount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="text-md lg:text-lg text-white bg-primary-darker font-medium mt-4 h-10 w-full rounded-md hover:bg-btn-hover"
              >
                COMPRAR
              </button>
            </form>
          </div>

          <div className="h-px bg-primary-darker/40 mt-7"></div>

          <div className="mt-6 text-md">
            <h2 className="text-lg lg:text-xl font-semibold text-primary-darker">
              DESCRIÇÃO
            </h2>

            <p className="text-sm lg:text-lg text-justify text-black mt-5">
              Vestido longo de festa, a epítome da elegância com o nosso
              deslumbrante modelo. Este vestido emana sensualidade onde quer que
              você vá, destacando-se com um sedutor decote tomara que caia,
              complementado por um corset que realça suas curvas. Feito sob
              medida para abraçar delicadamente cada contorno do seu corpo,
              apresenta uma ousada fenda na perna e um deslumbrante corte
              sereia. É a escolha ideal para qualquer ocasião em que você deseje
              deixar uma impressionante marca de sofisticação e beleza.
            </p>

            <h3 className="text-md lg:text-lg font-semibold text-primary-darker mt-4">
              Detalhes:
            </h3>
            <ul className="list-disc ml-7 text-sm lg:text-lg">
              <li>Drapeado na cintura</li>
              <li>Tomara que caia</li>
              <li>Barbatanas</li>
              <li>Corset</li>
              <li>Fenda</li>
            </ul>

            <h3 className="text-md lg:text-lg font-semibold text-primary-darker mt-4">
              Ideal para ocasiões:
            </h3>
            <ul className="list-disc ml-7 text-sm lg:text-lg">
              <li>Casamento no campo</li>
              <li>Casamento de dia</li>
              <li>Casamento a noite</li>
              <li>Eventos ao ar livre</li>
              <li>Casamento na praia</li>
              <li>Formatura</li>
            </ul>

            <div className="mt-5">
              <div>
                <details className="open:shadow-lg p-4 border border-black/40">
                  <summary className="text-sm lg:text-base leading-6 text-primary-darker font-semibold select-none">
                    Especificações Técnicas
                  </summary>
                  <div className="mt-3 text-sm lg:text-md leading-6 space-y-2">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Maiores quia, asperiores veniam deleniti sed, incidunt
                      adipisci consectetur, eum unde facilis neque fugit optio
                      magni a ratione est alias. Asperiores, ducimus?
                    </p>
                  </div>
                </details>
              </div>

              <div>
                <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-4 border border-black/40">
                  <summary className="text-sm lg:text-base leading-6 text-primary-darker font-semibold select-none">
                    Medidas da Modelo
                  </summary>
                  <div className="mt-3 text-sm lg:text-md leading-6 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit expedita debitis laborum error nostrum consectetur
                      quaerat? Libero, reprehenderit iure. Quas corporis facilis
                      nihil enim itaque maiores hic iusto suscipit asperiores?
                    </p>
                  </div>
                </details>
              </div>

              <div>
                <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-4 border border-black/40">
                  <summary className="text-sm lg:text-sm leading-6 text-primary-darker font-semibold select-none">
                    Cuidados!
                  </summary>
                  <div className="mt-3 text-sm lg:text-md leading-6 space-y-2">
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

          <div className="h-px bg-primary-darker/40 mt-7"></div>

          <div className="mt-6">
            <h2 className="text-lg lg:text-xl font-medium text-primary-darker">
              Frete
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 lg:gap-11">
              <input
                type="text"
                placeholder="Digite seu CEP..."
                value={cep}
                onChange={handleCepChange}
                className="text-sm lg:text-base border border-black rounded-sm w-[317px] h-12 placeholder:font-medium placeholder:text-gray-600 p-4"
              />
              <button
                className="text-sm lg:text-base text-white bg-primary-darker font-medium h-12 w-[226px] rounded-md hover:bg-btn-hover"
                onClick={handleFreteSubmit}
              >
                CALCULAR
              </button>
            </div>
            {!isValid && (
              <span
                id="cep-error"
                className="flex items-center gap-2 mt-4 text-red-500 text-xs lg:text-sm font-semibold"
              >
                <WarningCircle size={20} className="flex-shrink-0" />
                Por favor, digite um CEP válido.
              </span>
            )}
            {showMessage && (
              <div
                id="cep-error"
                className="flex justify-between items-center gap-2 mt-4 text-sm"
              >
                <p className="flex-1 text-left">Retire na loja</p>
                <p className="flex-1 text-right font-semibold">Grátis</p>
              </div>
            )}
          </div>

          <div className="h-px bg-primary-darker/40 mt-7"></div>

          <div className="mt-5">
            <h2 className="text-xl font-medium text-primary-darker">
              Compartilhar
            </h2>
            <div className="flex items-center gap-7 mt-3">
              <a href="#">
                <InstagramLogo size={43} color="#584424" />
              </a>
              <a href="#">
                <WhatsappLogo size={43} color="#584424" />
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
