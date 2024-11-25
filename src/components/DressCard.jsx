import React from "react";
import SizeOption from "./SizeOption";
import { useNavigate } from "react-router-dom";

const DressCard = ({ imgURL, name, price, sizes, alt }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-1 flex-col
                    lg:w-[280px] lg:h-[550px]
                    md:w-[300px] md:h-[570px]
                    sm:w-[280px] sm:h-[550px]
                    max-sm:w-[200px] max-sm:h-[430px] max-sm:my-2
                    place-self-center
                    p-3 bg-white rounded-lg
                    cursor-pointer
                    transition ease-in-out delay-400
                    hover:drop-shadow-2xl hover:scale-110"
      onClick={() => navigate("/dress")}
      tabindex={0}
    >
      <img
        src={imgURL}
        alt={alt}
        className="w-full place-self-center rounded"
      />
      <h3 className=" text-xl mt-3 font-montserrat font-semibold text-primary-darker">
        {name}
      </h3>

      <div
        className="my-2 grid place-content-start
                      lg:grid-cols-5
                      md:grid-cols-5 md:gap-x-[0.1px]
                      sm:grid-cols-5 sm:gap-y-3 sm:gap-x-[0.1px]
                      max-sm:grid-cols-4 max-sm:gap-x-[0.1px]
                      grid-cols-7 gap-7"
      >
        {sizes.map((size) => (
          <SizeOption sizeName={size} />
        ))}
      </div>

      <p className="text-xl py-1 font-montserrat font-semibold">
        R$
        {price.toLocaleString("pt-BR", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </p>
    </div>
  );
};

export default DressCard;
