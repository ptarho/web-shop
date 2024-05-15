import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../../types";
import cl from "./Product.module.scss";
import { ProductEditor } from "../../components";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(
        `http://localhost:8080/products/${productId}`
      );
      const product = (await response.json()) as IProduct;
      setProduct(product);
      console.log(product);
      return product;
    };
    fetchProductDetails();
  }, []);

  if (!product) {
    return <>Loading</>;
  }

  return (
    <div>
      <div className={cl.product}>
        <img src={product.imageUrl} alt="Product image" className={cl.image} />
        {edit ? (
          <div className={cl.edit}>
            <ProductEditor
              productId={productId!}
              setProduct={setProduct}
              product={product}
              className={cl.form}
            />
          </div>
        ) : (
          <div className={cl.description}>
            <h2>Product: {product.name}</h2>
            <p>Product code: {productId}</p>
            <p>Product parameters:</p>
            <div>
              <p>Width: {product.size.width}cm</p>
              <p>Height: {product.size.height}cm</p>
              <p>Weight: {product.weight}</p>
            </div>
          </div>
        )}
        <button className={cl.editBtn} onClick={() => setEdit((prev) => !prev)}>
          {edit ? "Close" : "Edit"}
        </button>
      </div>
      <div className={cl.comments}>
        <form>
          <input required placeholder="Write a comment" />
          <button>Add comment</button>
        </form>

        {product.comments.map((comment) => (
          <div>
            {comment.description} <span>{comment.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
