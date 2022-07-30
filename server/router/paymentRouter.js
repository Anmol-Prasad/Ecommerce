import express from "express";
import paymentController from "../controllers/paymentController.js";
import auth from "../middleware/auth.js";
import authAdmin from "../middleware/authAdmin.js";
const router = express.Router();

router
  .route("https://burgershot-server.herokuapp.com/payment")
  .get(paymentController.getPayments)
  .post(auth, paymentController.createPayment);

export default router;
