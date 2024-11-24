import { products } from "../constants";
import { DressCard } from "../components";

const NewItems = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl font-semibold font-montserrat text-primary-darker underline">
          Novidades
        </h2>
      </div>

      <div
        className="m-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2 
                        sm:gap-x-4 sm:gap-y-10  gap-5"
      >
        {products.map((product) => (
          <DressCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewItems;
