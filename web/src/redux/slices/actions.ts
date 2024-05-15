import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../../../types";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const products = await response.json();
      return products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete product");
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData: IProduct) => {
    try {
      const response = await fetch(`http://localhost:8080/products/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const responseData = await response.json();
      return responseData as IProduct;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create product");
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProducts",
  async ({
    productId,
    productData,
  }: {
    productId: string;
    productData: IProduct;
  }) => {
    try {
      const response = await fetch(
        `http://localhost:8080/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      const responseData = await response.json();
      console.log(responseData)
      return responseData as IProduct;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to edit product");
    }
  }
);
