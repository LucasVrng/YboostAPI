import express from "express";
import { login } from "../controllers/loginController.js";

const router = express.Router();

/**
 * @file loginRoutes.js
 * @route POST /login
 * @description Delegate authentication to the login controller.
 */
router.post("/login", login);

export default router;
