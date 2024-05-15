import React from "react";
import { IProduct } from "../../../../types";

import cl from "./ProductCard.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { deleteProduct } from "../../redux/slices/actions";
import { Link } from "react-router-dom";

type Props = {
  product: IProduct;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  console.log(product);
  return (
    <div className={cl.card}>
      <img src={product.imageUrl} alt="Product image" className={cl.image} />

      <div className={cl.description}>
        <Link to={`/product/${product._id}`}>
          <h6>{product.name}</h6>
        </Link>
        <p>Available: {product.count}</p>
        <p>Width: {product.size.width}cm</p>
        <p>Height: {product.size.height}cm</p>
        <p>Weight: {product.weight}</p>
        <button
          className={cl.delete}
          onClick={() => {
            if (confirm("Do you want to delete this product?")) {
              console.log("test");
              dispatch(deleteProduct(product._id));
            }
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
