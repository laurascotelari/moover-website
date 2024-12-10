import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomeSection } from "../../sections";
import { Carousel, IconButton } from "@material-tailwind/react";
import { homeImage } from "../../assets";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useTheme } from "../../contexts/ThemeContext";

const placeholderArray = [
  {
    imgSrc: homeImage,
    alt: "Banner promocional sobre novos vestidos da temporada de primavera e verão, à esquerda o titulo em letras negrito com o texto 'Primavera Verão', à direita a modelo feminina com brincos em formato de losango e vestido sem mangas, com estampa florida com petalas com um gradiente formado pelas cores rosa, laranja e branco, no fundo da imagem há um cenário de folhas com duas palmeiras com um leve desfoque",
  },
  {
    imgSrc: homeImage,
    alt: "Banner promocional sobre novos vestidos da temporada de primavera e verão, à esquerda o titulo em letras negrito com o texto 'Primavera Verão', à direita a modelo feminina com brincos em formato de losango e vestido sem mangas, com estampa florida com petalas com um gradiente formado pelas cores rosa, laranja e branco, no fundo da imagem há um cenário de folhas com duas palmeiras com um leve desfoque",
  },
  {
    imgSrc: homeImage,
    alt: "Banner promocional sobre novos vestidos da temporada de primavera e verão, à esquerda o titulo em letras negrito com o texto 'Primavera Verão', à direita a modelo feminina com brincos em formato de losango e vestido sem mangas, com estampa florida com petalas com um gradiente formado pelas cores rosa, laranja e branco, no fundo da imagem há um cenário de folhas com duas palmeiras com um leve desfoque",
  },
  {
    imgSrc: homeImage,
    alt: "Banner promocional sobre novos vestidos da temporada de primavera e verão, à esquerda o titulo em letras negrito com o texto 'Primavera Verão', à direita a modelo feminina com brincos em formato de losango e vestido sem mangas, com estampa florida com petalas com um gradiente formado pelas cores rosa, laranja e branco, no fundo da imagem há um cenário de folhas com duas palmeiras com um leve desfoque",
  },
];

const HomeCarousel = ({ imgArray }) => (
  <Carousel
    loop
    navigation={() => null}
    prevArrow={({ handlePrev }) => (
      <IconButton
        variant="text"
        color="#584424"
        size="lg"
        onClick={handlePrev}
        className={`text-primary-lighter !absolute top-2/4 left-4 -translate-y-2/4`}
        aria-label="Mostrar a imagem anterior do banner da homepage"
      >
        <CaretLeft size={32} />
      </IconButton>
    )}
    nextArrow={({ handleNext }) => (
      <IconButton
        variant="text"
        color="#584424"
        size="lg"
        onClick={handleNext}
        className="text-primary-darker !absolute top-2/4 !right-4 -translate-y-2/4"
        aria-label="Mostrar a imagem seguinte do banner da homepage"
      >
        <CaretRight size={32} />
      </IconButton>
    )}
  >
    {imgArray.map((value) => (
      <img src={value.imgSrc} alt={value.alt} className="w-screen" />
    ))}
  </Carousel>
);

export const Home = () => {
  //classes referentes ao tema padrao e o tema de alto contraste
  const { toggleTheme, theme } = useTheme();

  //tema padrao
  let bgColor = "bg-white";

  //cores do tema em alto contraste
  if (theme == "theme2") {
    bgColor = "bg-black";
  }
  return (
    <div className={`w-full ${bgColor}`}>
      <Header />
      <HomeCarousel imgArray={placeholderArray} />
      <HomeSection title={"Novidades"} />
      <HomeSection title={"Vestidos de Festa"} />
      <Footer />
    </div>
  );
};
