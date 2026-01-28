import express from "express";
import { login } from "../controllers/loginController.js";

const router = express.Router();

// Route POST : Quand on appelle /login, on lance la fonction 'login' du contrôleur
router.post("/login", login);

export default router;