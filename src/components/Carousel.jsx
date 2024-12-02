import { useState } from "react";

const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avançar no carrossel
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Voltar no carrossel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Imagem Principal */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="Mulher usando um vestido longo rosa vibrante com decote em V e fenda na perna, segurando uma bolsa rosa. A imagem foi tirada em um jardim com fonte ao fundo em um dia ensolarado."
          className="w-full h-auto object-cover transition-all duration-300"
        />
      </div>

      {/* Botões de Navegação */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
      >
        ❯
      </button>

      {/* Miniaturas */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
              index === currentIndex ? "border-2 border-black scale-105" : "border border-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
