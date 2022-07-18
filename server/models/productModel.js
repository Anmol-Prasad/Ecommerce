import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
      trim: true,
      // required: true,
    },
    url: {
      type: String,
      //  required:true
    },
    title: {
      type: String,
      // required: true,
    },
    longtitle: {
      type: String,
      // required: true,
    },
    tagline: {
      type: String,
      // required: true,
    },
    mrp: {
      type: String,
      // required: true,
    },
    discount: {
      type: String,
      // required: true,
    },
    cost: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true, //important
  }
);

const Products = mongoose.model("Products", productSchema);
export default Products;
