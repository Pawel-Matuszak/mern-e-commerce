import mongoose from "mongoose";
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  url: String,
})

export default mongoose.model("Product", ItemSchema)