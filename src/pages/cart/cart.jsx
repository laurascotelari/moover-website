import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IconButton, Button } from "@material-tailwind/react";
import { Plus, Minus } from "phosphor-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useFontSize } from "../../contexts/FontSizeContext";

const CartCard = ({ itemIndex, cartItems, setCartItems }) => {
  const item = cartItems[itemIndex];
  const qtd = item.qtd;

  const { toggleFontSize, fontSize } = useFontSize();
  //classes referentes ao tema padrao e o tema de alto contraste
  const { toggleTheme, theme } = useTheme();

  //tema padrao
  let borderColor = "border-primary-darker";
  let secundaryTextColor = "text-black";
  let bgColor = "bg-gray-100";
  let iconColor = "#584424";

  //cores do tema em alto contraste
  if (theme == "theme2") {
    secundaryTextColor = "text-white";
    borderColor = "border-white";
    bgColor = "bg-gray-100/5";
    iconColor = "white";
  }

  const remove = () => {
    const newCartItems = [...cartItems];
    setCartItems(newCartItems.toSpliced(itemIndex, 1));
  };
  return (
    <div
      className={`${bgColor} w-full px-2 py-4 lg:pt-4 flex flex-row gap-4 mt-2 lg:m-4 rounded-lg h-fit`}
    >
      <img
        src={item.imgURL}
        alt={item.alt}
        className="h-40 md:h-28 rounded-lg basis-1/12 grow-0"
      />
      <div
        className={`basis-9/12 md:max-h-28 p-2 ${secundaryTextColor} flew flex-col`}
      >
        <h3 className={`text-${fontSize}md`}>{item.name}</h3>
        <div className="flex flex-col md:flex-row gap-4 h-auto">
          <div>
            <p className={`text-${fontSize}sm text-nowrap font-normal pt-2`}>
              Tamanho: {item.size}
            </p>
            <p className={`text-${fontSize}sm font-normal pt-2`}>
              R${" "}
              {item.price.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="flex flex-col sm:flew-row md:flex-none">
            <div
              className={`shrink h-10 grow md:max-w-sm relative md:mt-4 border ${borderColor} flex items-center`}
            >
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
                aria-label="Subtrair uma unidade do item no carrinho"
              >
                <Minus />
              </IconButton>
              <span
                className={`font-normal text-${fontSize}lg text-center grow`}
              >
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
                aria-label="Adicionar uma unidade do item no carrinho"
              >
                <Plus />
              </IconButton>
            </div>
            <Button
              variant="text"
              className="md:hidden inline h-10  grow"
              color={iconColor}
              onClick={remove}
              aria-label="Remover o item do carrinho"
            >
              Remover
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="text"
        className="hidden md:inline"
        color={iconColor}
        onClick={remove}
        aria-label="Remover o item do carrinho"
      >
        Remover
      </Button>
    </div>
  );
};

const CartList = ({ cartItems, setCartItems }) => {
  const { toggleFontSize, fontSize } = useFontSize();
  const { toggleTheme, theme } = useTheme();
  //tema padrao
  let borderColor = "border-primary-darker";
  let textColor = "text-primary-darker";
  let bgColor = "bg-gray-100";

  //cores do tema em alto contraste
  if (theme == "theme2") {
    textColor = "text-white";
    borderColor = "border-white";
    bgColor = "bg-black";
  }
  const qtdItems = cartItems
    .map((value) => value.qtd)
    .reduce((acc, val) => acc + val, 0);
  return (
    <div
      className={`${bgColor} p-6 rounded-lg text-${fontSize}xl font-semibold font-montserrat ${textColor} basis-3/5 h-fit`}
    >
      <h1>
        Carrinho de compras{" "}
        <span className={`text-${fontSize}lg`}>
          ({qtdItems} item{qtdItems === 1 ? "" : "s"})
        </span>
      </h1>
      <hr className={`${borderColor} hidden lg:inline`} />
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
  const { toggleFontSize, fontSize } = useFontSize();
  const { toggleTheme, theme } = useTheme();
  //tema padrao
  let borderColor = "border-primary-darker";
  let textColor = "text-primary-darker";
  let secundaryTextColor = "text-black";
  let tertiaryTextColor = "text-white";
  let bgColor = "bg-gray-100";
  let secundaryBgColor = "bg-primary-darker";

  //cores do tema em alto contraste
  if (theme == "theme2") {
    textColor = "text-white";
    secundaryTextColor = "text-white";
    tertiaryTextColor = "text-black";
    borderColor = "border-white";
    bgColor = "bg-black";
    secundaryBgColor = "bg-white";
  }

  const subtotal = cartItems
    .map((value) => value.qtd * value.price)
    .reduce((acc, val) => acc + val, 0);
  return (
    <div
      className={`${bgColor} p-6 xl:py-6 xl:px-10 rounded-lg text-${fontSize}xl md:text-${fontSize}xl lg:text-${fontSize}xl xl:text-${fontSize}xxl font-semibold font-montserrat ${textColor} basis-2/5 lg:${bgColor} h-fit`}
    >
      <h2>Resumo da compra</h2>
      <hr className="border-black" />

      <div className="flex flex-row pt-16 justify-between">
        <div
          className={`text-${fontSize}lg md:text-${fontSize}xl lg:text-${fontSize}lg xl:text-${fontSize}xl`}
        >
          Subtotal:
        </div>
        <div className={`${secundaryTextColor} font-normal`}>
          <div
            className={`text-${fontSize}lg md:text-${fontSize}xl lg:text-${fontSize}lg xl:text-${fontSize}xl text-end`}
          >
            R${" "}
            {subtotal.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </div>
          <div
            className={`font-extralight text-${fontSize}xs md:text-${fontSize}base lg:text-${fontSize}xs xl:text-${fontSize}base`}
          >
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
        <div
          className={`text-${fontSize}lg md:text-${fontSize}xl lg:text-${fontSize}lg xl:text-${fontSize}xl`}
        >
          Frete:
        </div>
        <div
          className={`font-extralight text-${fontSize}sm md:text-${fontSize}lg lg:text-${fontSize}sm xl:text-${fontSize}lg ${textColor}`}
        >
          Calculado na próxima etapa
        </div>
      </div>

      <Button
        fullWidth
        className={`${tertiaryTextColor} ${secundaryBgColor} font-montserrat py-5 normal-case text-${fontSize}lg`}
        aria-label="Finalizar compra"
      >
        Finalizar compra
      </Button>
      <Button
        variant="text"
        className={`border ${borderColor} ${textColor} font-montserrat py-4 normal-case font-normal mt-2`}
        fullWidth
        aria-label="Continuar comprando"
      >
        Continuar comprando
      </Button>
    </div>
  );
};

export const Cart = ({ cartItems, setCartItems }) => {
  const { toggleFontSize, fontSize } = useFontSize();
  const { toggleTheme, theme } = useTheme();
  //tema padrao
  let bgColor = "bg-white";

  //cores do tema em alto contraste
  if (theme == "theme2") {
    bgColor = "bg-black";
  }
  return (
    <div className="w-full">
      <Header />
      <div
        className={`${bgColor} sm:p-10 lg:p-20 flex flex-col lg:flex-row gap-24 min-h-screen max-h-fit`}
      >
        <CartList cartItems={cartItems} setCartItems={setCartItems} />
        <CartResume cartItems={cartItems} />
      </div>
      <Footer />
    </div>
  );
};
