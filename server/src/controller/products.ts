import { IProduct } from "./../../../types/product.d";
import express from "express";
import Product from "../db/product";

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { field = "name", order = 1 } = req.body;
    const products = await Product.find({}).sort({ [field]: order });
    return res.status(200).json(products).end();
  } catch (err) {
    console.error(err);
    return res.sendStatus(400);
  }
};

export const createProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { imageUrl, name, count, size, weight } = req.body as IProduct;

    const product = await Product.create({
      imageUrl,
      name,
      count,
      size,
      weight,
    });
    return res.status(200).json(product).end();
  } catch (err) {
    console.error(err);
    return res.sendStatus(400);
  }
};

export const deleteProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    return res.status(200).json(product).end();
  } catch (err) {
    console.error(err);
    return res.sendStatus(400);
  }
};

export const getProductDetails = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate("comments");
    return res.status(200).json(product).end();
  } catch (err) {
    console.error(err);
    return res.sendStatus(400);
  }
};

export const editProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const newProductData = req.body as IProduct;
    
    const product = await Product.findByIdAndUpdate(id, newProductData, {
      new: true,
    });
    return res.status(200).json(product).end();
  } catch (err) {
    console.error(err);
    return res.sendStatus(400);
  }
};
