import { useState } from "react";
import { NewItems } from "./sections";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={""}
          element={
            <main className="relative">
              <Header></Header>
              <section className="padding">
                <NewItems title="Homepage" />
              </section>
              <Footer></Footer>

            </main>
          }
        />
        <Route
          path={"/dress"}
          element={
            <main className="relative">
              <section className="padding">
                <NewItems title="Dress" />
              </section>
            </main>
          }
        />
        <Route
          path={"/cart"}
          element={
            <main className="relative">
              <section
                className="padding"
                onClick={() => {
                  setCartItems("2");
                }}
              >
                <NewItems title="Cart" />
                text: {cartItems}
              </section>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
