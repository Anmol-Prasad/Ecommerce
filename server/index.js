import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import Connection from "./Connection.js";
import userRoutes from "./router/userRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import paymentRouter from "./router/paymentRouter.js";
import uploadRouter from "./router/upload.js";
import productRouter from "./router/productRouter.js";
import Razorpay from "razorpay";
import { nanoid } from "nanoid";

const razorpay = new Razorpay({
  key_id: "rzp_test_3uJqa7IxWduRnK",
  key_secret: "pw9SDzTdMZdlYsFOO0S01ySG",
});

dotenv.config();

//middlewares
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Routes
app.use("https://burgershot-server.herokuapp.com/user", userRoutes);
app.use("https://burgershot-server.herokuapp.com/user", paymentRouter);

app.use("https://burgershot-server.herokuapp.com/api", categoryRouter);
app.use("https://burgershot-server.herokuapp.com/api", uploadRouter);
app.use("https://burgershot-server.herokuapp.com/api", productRouter);
app.get("https://burgershot-server.herokuapp.com/", (req, res) => {
  res.send("Hello");
});
app.post("/razorpay", (req, res) => {
  const amount = req.body.payamount;
  const currency = "INR";

  let options = {
    amount: amount * 100,
    currency: currency,
    payment_capture: 1,
  };

  razorpay.orders.create(options, (err, order) => {
    console.log(order);
  });

  res.send("Hello Billionaire");
});

app.post("https://burgershot-server.herokuapp.com/paydone", (req, res) => {
  return res.redirect("http://localhost:3000/");
});

app.post("/", (req, res) => {
  res.send("Payment Successful");
});

//Connection to mongoDB
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

//Hosting on PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running successfully on ${port}`);
});
