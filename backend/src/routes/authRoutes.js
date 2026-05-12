import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

/**
 * @file authRoutes.js
 * @route POST /register
 * @description Delegate registration to the auth controller.
 */
router.post("/register", register);

export default router;
