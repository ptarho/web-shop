import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  count: Number,
  size: {
    width: Number,
    height: Number,
  },
  weight: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
