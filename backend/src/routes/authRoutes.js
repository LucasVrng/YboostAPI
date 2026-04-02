import express from "express";
import { register } from "../controllers/authController.js";
import { login } from "../controllers/loginController.js";

const router = express.Router();

// Route POST : Quand on appelle /register, on lance la fonction 'register' du contrôleur
router.post("/register", register);

router.post("/login", login);

export default router;
