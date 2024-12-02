import { products } from "../constants";
import { DressCard } from "../components";
import { IconButton } from "@material-tailwind/react";
import { CaretRight, CaretLeft } from "phosphor-react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSize } from "../contexts/FontSizeContext";

const HomeSection = ({ title }) => {
  const { width } = useWindowDimensions();

  const itemsPerRow = width > 1280 ? 4 : width > 1024 ? 3 : 2;

  const [sliceIndex, setSliceIndex] = useState(0);

  const sampleArray = products.concat(products);
  const shownArray = sampleArray.slice(sliceIndex, sliceIndex + itemsPerRow);

  //classes referentes ao tema padrao e o tema de alto contraste
  const {toggleTheme, theme}  = useTheme();

  //tema padrao
  let textColor = "text-primary-darker";

  //cores do tema em alto contraste
  if(theme == 'theme2'){
    textColor = "text-white";
  }

  const {toggleFontSize, fontSize} = useFontSize();

  return (
    <section id="products" className="max-container p-8">
      <div className="flex flex-col justify-start gap-5">
        <h2 className={`text-${fontSize}xxl font-semibold font-montserrat ${textColor} underline`}>
          {title}
        </h2>
      </div>
      <div className="flex flex-row items-center">
        <IconButton
          onClick={() => {
            setSliceIndex((products.length + sliceIndex - 1) % products.length);
          }}
          className={`${textColor} bg-transparent shadow-transparent hover:shadow-transparent`}
        >
          <CaretLeft size={32} />
        </IconButton>
        <div
          className="grow my-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2 
        sm:gap-x-4 sm:gap-y-10 gap-5"
        >
          {shownArray.map((product) => (
            <DressCard key={product.name} {...product} />
          ))}
        </div>
        <IconButton
          onClick={() => {
            setSliceIndex((sliceIndex + 1) % products.length);
          }}
          className={`${textColor} bg-transparent shadow-transparent hover:shadow-transparent`}
        >
          <CaretRight size={32} />
        </IconButton>
      </div>
    </section>
  );
};

export default HomeSection;
