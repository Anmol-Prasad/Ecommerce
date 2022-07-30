import express from "express";
import { userController } from "../controllers/userController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/refresh_token", userController.refreshToken);
router.get("/logout", userController.logout);
router.get("/infor", auth, userController.getUser);
router.patch("/addCart", auth, userController.addCart);
router.post("/pay", userController.pay);
export default router;
