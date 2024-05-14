import React, { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../types";
import cl from "./Modal.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { createProduct } from "../../redux/slices/actions";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { register, handleSubmit, reset } = useForm<IProduct>();

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    if (data.weight.indexOf("g") === -1) {
      data.weight += "g";
    }
    console.log(data);
    dispatch(createProduct(data));
    closeModal();
    reset();
  };

  return (
    <dialog ref={modalRef} onCancel={closeModal} className={cl.modal}>
      <h3>Create new product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.inputsWrapper}>
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
        </div>

        <button onClick={closeModal} type="button">
          Cancel
        </button>
        <button type="submit">Create</button>
      </form>
    </dialog>
  );
};

export { Modal };
