import express from "express";
import { register } from "../controllers/authController.js";
import { login } from "../controllers/loginController.js";

const router = express.Router();

/**
 * @file authRoutes.js
 * @route POST /register
 * @description Delegate registration to the auth controller.
 */
router.post("/register", register);

router.post("/login", login);

export default router;
