import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

// Route POST : Quand on appelle /register, on lance la fonction 'register' du contrôleur
router.post("/register", register);

export default router;
