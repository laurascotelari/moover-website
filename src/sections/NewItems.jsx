import React from "react";
import { products } from "../constants";
import { DressCard } from "../components";

const NewItems = ({ title }) => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl font-semibold font-montserrat text-primary-darker underline">
          {title}
        </h2>
      </div>

      <div className="m-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <DressCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewItems;
