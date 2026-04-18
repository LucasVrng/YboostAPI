import express from "express";
import { deleteUser } from "../controllers/userController.js";

const router = express.Router();

// DELETE http://localhost:5000/api/users/:id
router.delete("/:id", deleteUser);

export default router;
