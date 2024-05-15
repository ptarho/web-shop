import { useEffect, useState } from "react";
import { Modal } from "./components";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchProducts } from "./redux/slices/actions";
import { Link, Outlet } from "react-router-dom";
import cl from "./App.module.scss";
function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      <header className={cl.header}>
        <Link to="/" style={{ margin: "0 auto 0 30px" }}>
          Home
        </Link>
        <h1>Welcome to our web shop!</h1>
        <button onClick={() => setModal(true)}>Add product+</button>
      </header>

      {modal && <Modal closeModal={() => setModal(false)} isOpen={modal} />}
      <Outlet />
    </>
  );
}

export default App;
