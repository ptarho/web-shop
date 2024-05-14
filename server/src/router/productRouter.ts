import { createProduct, getProducts, deleteProduct } from "../controller/products";
import express from "express";

export default (router: express.Router) => {
  router.get("/products", getProducts);
  router.post("/products", createProduct)
  router.delete("/products/:id", deleteProduct)
};
