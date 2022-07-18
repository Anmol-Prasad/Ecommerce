import express from "express";
import categoryContoller from "../controllers/categoryController.js";
import auth from "../middleware/auth.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router
  .route("/category")
  .get(categoryContoller.getCategories)
  .post(auth, authAdmin, categoryContoller.createCategory);

router
  .route("/category/:id")
  .delete(auth, authAdmin, categoryContoller.deleteCategory)
  .put(auth, authAdmin, categoryContoller.updateCategory);

export default router;
