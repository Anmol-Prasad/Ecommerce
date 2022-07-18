import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   // required: true,
    // },
    email: {
      type: String,
      // required: true,
    },

    address: {
      type: String,
      // required: true,
    },
    total: {
      type: String,
      // required: true,
    },
    cart: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payments", paymentSchema);
export default Payment;
