import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  description: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
