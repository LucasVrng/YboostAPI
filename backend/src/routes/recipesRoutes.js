import express from "express";
import {
  getRecipes,
  postRecipes,
  putRecipes,
  deleteRecipes,
  getCountry,
} from "../controllers/recipesController.js";

const router = express.Router();

// Routes de lecture
router.get("/", getRecipes);
router.get("/countries", getCountry);
router.get("/:id", getRecipes);

// Routes de modification
router.post("/", postRecipes);
router.put("/:id", putRecipes);
router.delete("/:id", deleteRecipes);

export default router;
