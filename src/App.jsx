import { NewItems } from "./sections";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
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
        </section>
      </main>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
