import { useState } from "react";
import { Home } from "./pages/home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Cart } from "./pages/cart/cart.jsx";
import { cartItemsConst } from "./constants/index.js";
import Dress from "./pages/dress.jsx";
import { ThemeProvider } from "./contexts/ThemeContext/index.jsx";
import { FontSizeProvider } from "./contexts/FontSizeContext/index.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState(cartItemsConst);
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <BrowserRouter>
          <Routes>
            <Route path={""} element={<Home />} />
            <Route path={"/dress"} element={<Dress />} />
            <Route
              path={"/cart"}
              element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
            />
          </Routes>
        </BrowserRouter>
      </FontSizeProvider>
    </ThemeProvider>
  );
};

export default App;
