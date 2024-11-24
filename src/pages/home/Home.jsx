import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomeSection } from "../../sections";
import { Carousel, IconButton } from "@material-tailwind/react";
import { homeImage } from "../../assets";
import { CaretRight, CaretLeft } from "phosphor-react";

const placeholderArray = [
  { imgSrc: homeImage, alt: "placeholder" },
  { imgSrc: homeImage, alt: "placeholder" },
  { imgSrc: homeImage, alt: "placeholder" },
  { imgSrc: homeImage, alt: "placeholder" },
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
        className="text-primary-darker !absolute top-2/4 left-4 -translate-y-2/4"
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
  return (
    <div className="w-full">
      <Header />
      <HomeCarousel imgArray={placeholderArray} />
      <HomeSection title={"Novidades"} />
      <HomeSection title={"Vestidos de Festa"} />
      <Footer />
    </div>
  );
};
