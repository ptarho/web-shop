import { useEffect, useState } from "react";
import { Modal, ProductCard } from "./components";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchProducts } from "./redux/slices/actions";
import cl from "./App.module.scss";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!products.length) {
      console.log("Fetch products");
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      <header className={cl.header}>
        <h1>Welcome to our web shop!</h1>
        <button onClick={() => setModal(true)}>Add product+</button>
      </header>

      {modal && <Modal closeModal={() => setModal(false)} isOpen={modal} />}

      <main className={cl.products}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </main>
    </>
  );
}

export default App;
