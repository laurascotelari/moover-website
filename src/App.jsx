import { useState } from "react";
import { NewItems } from "./sections";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = ({ cartItems, setCartItems }) =>
  createBrowserRouter([
    {
      path: "",
      element: (
        <main className="relative">
          <section className="padding">
            <NewItems title="Homepage" />
          </section>
        </main>
      ),
    },
    {
      path: "/dress",
      element: (
        <main className="relative">
          <section className="padding">
            <NewItems title="Dress" />
          </section>
        </main>
      ),
    },
    {
      path: "/cart",
      element: (
        <main className="relative">
          <section className="padding">
            <NewItems title="Cart" />
            <input
              type="button"
              className="w-10 h-10 "
              onClick={() => {
                const newCartItems = cartItems;
                newCartItems.append(1);
                setCartItems(newCartItems);
              }}
            />
            text: {cartItems.reduce((acc, value) => acc + value, 0)}
          </section>
        </main>
      ),
    },
  ]);

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return <RouterProvider router={router({ cartItems, setCartItems })} />;
};

export default App;
