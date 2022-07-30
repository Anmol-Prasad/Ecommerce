import express from "express";
import productController from "../controllers/productController.js";
import auth from "../middleware/auth.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router
  .route("https://burgershot-server.herokuapp.com/products")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("https://burgershot-server.herokuapp.com/products/:id")
  .delete(auth, authAdmin, productController.deleteProduct)
  .put(auth, authAdmin, productController.updateProduct);

export default router;
