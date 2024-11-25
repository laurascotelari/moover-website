import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IconButton, Button } from "@material-tailwind/react";
import { Plus, Minus } from "phosphor-react";

const CartCard = ({ itemIndex, cartItems, setCartItems }) => {
  const item = cartItems[itemIndex];
  const qtd = item.qtd;

  return (
    <div className="w-full pt-4 flex flex-row gap-4">
      <img
        src={item.imgURL}
        alt={item.alt}
        className="h-28 rounded-lg basis-1/12 grow-0"
      />
      <div className="basis-9/12 max-h-28 p-2 text-black flew flex-col">
        <h3 className="text-lg ">{item.name}</h3>
        <div className="flex flex-row gap-4 h-auto">
          <div>
            <p className="text-sm font-normal pt-2">Tamanho: {item.size} </p>
            <p className="text-sm font-normal pt-2">
              R${" "}
              {item.price.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="w-32 h-10 max-w-sm relative mt-4 border border-black flex items-center">
            <IconButton
              ripple={qtd > 1}
              variant="text"
              className={`rounded-none bg-transparent shadow-transparent hover:shadow-transparent ${
                qtd === 1
                  ? "text-transparent aria-disabled active:bg-transparent hover:bg-transparent"
                  : ""
              }`}
              onClick={() => {
                if (qtd < 2) {
                  return;
                }
                const newCartItems = [...cartItems];
                newCartItems[itemIndex].qtd = newCartItems[itemIndex].qtd - 1;
                setCartItems(newCartItems);
              }}
            >
              <Minus />
            </IconButton>
            <span className="font-normal text-lg text-center grow">
              {item.qtd}
            </span>
            <IconButton
              variant="text"
              className="rounded-none bg-transparent shadow-transparent hover:shadow-transparent"
              onClick={() => {
                const newCartItems = [...cartItems];
                newCartItems[itemIndex].qtd = newCartItems[itemIndex].qtd + 1;
                setCartItems(newCartItems);
              }}
            >
              <Plus />
            </IconButton>
          </div>
        </div>
      </div>
      <Button
        variant="text"
        color="black"
        onClick={() => {
          const newCartItems = [...cartItems];
          setCartItems(newCartItems.toSpliced(itemIndex, 1));
        }}
      >
        Remover
      </Button>
    </div>
  );
};

const CartList = ({ cartItems, setCartItems }) => {
  const qtdItems = cartItems
    .map((value) => value.qtd)
    .reduce((acc, val) => acc + val, 0);
  return (
    <div className="p-6 rounded-lg text-3xl font-semibold font-montserrat text-primary-darker basis-3/5 bg-gray-200 h-fit">
      <h1>
        Carrinho de compras ({qtdItems} item{qtdItems === 1 ? "" : "s"})
      </h1>
      <hr className="border-black" />
      {cartItems.map((value, index) => (
        <CartCard
          key={value.id}
          itemIndex={index}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

const CartResume = ({ cartItems }) => {
  const subtotal = cartItems
    .map((value) => value.qtd * value.price)
    .reduce((acc, val) => acc + val, 0);
  return (
    <div className="py-6 px-10 rounded-lg text-3xl font-semibold font-montserrat text-primary-darker basis-2/5 bg-gray-200 h-fit">
      <h2>Resumo da compra</h2>
      <hr className="border-black" />

      <div className="flex flex-row pt-16 justify-between">
        <div className="text-xl">Subtotal:</div>
        <div className="text-black font-normal">
          <div className="text-xl text-end">
            R${" "}
            {subtotal.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </div>
          <div className="font-extralight text-base">
            ou 10x de{" "}
            {(subtotal / 10).toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}{" "}
            sem juros
          </div>
        </div>
      </div>

      <div className="flex flex-row py-16 justify-between items-end">
        <div className="text-xl">Frete:</div>
        <div className="font-extralight text-lg text-black">
          Calculado na próxima etapa
        </div>
      </div>

      <Button
        fullWidth
        className="bg-[#584424] font-montserrat py-5 normal-case text-lg"
      >
        Finalizar compra
      </Button>
      <Button
        variant="text"
        className="font-montserrat py-4 normal-case font-normal mt-2"
        fullWidth
      >
        Continuar comprando
      </Button>
    </div>
  );
};

export const Cart = ({ cartItems, setCartItems }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="p-20 flex flex-row gap-24 min-h-screen max-h-screen">
        <CartList cartItems={cartItems} setCartItems={setCartItems} />
        <CartResume cartItems={cartItems} />
      </div>
      <Footer />
    </div>
  );
};
