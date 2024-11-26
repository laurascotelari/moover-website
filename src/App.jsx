import { useState } from "react";
import { Home } from "./pages/home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Cart } from "./pages/cart/cart.jsx";
import { cartItemsConst } from "./constants/index.js";
import Dress from "./pages/dress.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState(cartItemsConst);
  return (
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
  );
};

export default App;
