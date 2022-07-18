import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // required: true,
      trim: true,
      min: 2,
      max: 20,
    },
    email: {
      type: String,
      // required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    // cart: {
    //   type: Array,
    //   default: [],
    // },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);
export default user;
