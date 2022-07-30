import express from "express";
import { userController } from "../controllers/userController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post(
  "https://burgershot-server.herokuapp.com/register",
  userController.register
);
router.post(
  "https://burgershot-server.herokuapp.com/login",
  userController.login
);
router.get(
  "https://burgershot-server.herokuapp.com/refresh_token",
  userController.refreshToken
);
router.get(
  "https://burgershot-server.herokuapp.com/logout",
  userController.logout
);
router.get(
  "https://burgershot-server.herokuapp.com/infor",
  auth,
  userController.getUser
);
router.patch(
  "https://burgershot-server.herokuapp.com/addCart",
  auth,
  userController.addCart
);
router.post("https://burgershot-server.herokuapp.com/pay", userController.pay);
export default router;
