import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MainHomeImage } from "../../components/MainHomeImage";
import { NewItems } from "../../sections";


export const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Carousel>
      <MainHomeImage />
      <NewItems />
      <Footer />
    </div>
  );
};
