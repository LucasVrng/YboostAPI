import express from 'express';
import { getRecipeIngredients, postRecipeIngredients, putRecipeIngredients, deleteRecipeIngredients } from '../controllers/recipeIngredientControllers.js';

const router = express.Router();

router.get('/recipes/:recipeId/ingredients', getRecipeIngredients);
router.post('/recipes/:recipeId/ingredients', postRecipeIngredients);
router.put('/recipes/ingredients/:id', putRecipeIngredients);
router.delete('/recipes/ingredients/:id', deleteRecipeIngredients);

export default router;