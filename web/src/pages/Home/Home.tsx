import { useEffect } from "react";
import cl from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/slices/actions";
import { ProductCard } from "../../components";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <main className={cl.products}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </main>
  );
};

export default Home;
