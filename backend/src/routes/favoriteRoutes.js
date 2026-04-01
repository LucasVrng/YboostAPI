import express from "express";
import {
  addFavorite,
  getUserFavorites,
  removeFavorite,
} from "../controllers/favoriteController.js";

const router = express.Router();

router.post("/", addFavorite);
router.delete("/:id", removeFavorite);
router.get("/user/:userId", getUserFavorites);

export default router;
