import express from "express";
import ProductRouter from "./productRouter";

const router = express.Router();

export default (): express.Router => {
  ProductRouter(router);

  return router;
};
