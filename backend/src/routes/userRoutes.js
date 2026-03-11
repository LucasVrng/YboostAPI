import express from "express";
import { deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

// DELETE http://localhost:5000/api/users/:id
router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

export default router;
