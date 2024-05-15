import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../types";
import { useAppDispatch } from "../../redux/hooks";
import cl from "./ProductEditor.module.scss";
import { editProduct } from "../../redux/slices/actions";

type Props = {
  productId: string;
  product: IProduct;
  setProduct: (product: IProduct) => void;
  className?: string;
};
const ProductEditor: React.FC<Props> = ({
  productId,
  product,
  setProduct,
  className,
}) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<IProduct>({
    defaultValues: product,
  });

  const onSubmit: SubmitHandler<IProduct> = (productData) => {
    if (productData.weight.indexOf("g") === -1) {
      productData.weight += "g";
    }
    console.log(productData);
    setProduct(productData);
    dispatch(editProduct({ productId, productData }));
  };

  return (
    <form
      className={`${cl.form} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        Name
        <input
          {...register("name")}
          placeholder="Product name"
          required
        ></input>
      </label>

      <label>
        Image
        <input
          {...register("imageUrl")}
          placeholder="Product image url"
          required
        ></input>
      </label>

      <label>
        Amount
        <input
          {...register("count")}
          placeholder="Product amount"
          type="number"
          min={0}
          required
        ></input>
      </label>

      <label>
        Width
        <input
          {...register("size.width")}
          placeholder="Product width"
          type="number"
          min={0}
          required
        ></input>
      </label>

      <label>
        Height
        <input
          {...register("size.height")}
          placeholder="Product height"
          type="number"
          min={0}
          required
        ></input>
      </label>

      <label>
        Weight
        <input
          {...register("weight")}
          placeholder="Product weight"
          required
        ></input>
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export { ProductEditor };
