import express from "express";
import { deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

/**
 * @file userRoutes.js
 * @route DELETE /api/users/:id
 * @route PUT /api/users/:id
 * @description Delegate user deletion and update actions to userController.
 */
router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

export default router;
