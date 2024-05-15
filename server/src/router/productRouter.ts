import {
  createProduct,
  getProducts,
  deleteProduct,
  getProductDetails,
  editProduct,
} from "../controller/products";
import express from "express";

export default (router: express.Router) => {
  router.get("/products", getProducts);
  router.post("/products", createProduct);
  router.delete("/products/:id", deleteProduct);
  router.get("/products/:id", getProductDetails);
  router.put("/products/:id", editProduct);
};
