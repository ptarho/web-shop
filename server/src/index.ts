import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";

dotenv.config();
const app = express();
app.use(json())
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const PORT = process.env.PORT || 8080;

app.use('/', router())
app.use(cors)

app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080/");
});
