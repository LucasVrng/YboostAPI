import express from 'express';
import { getRecipes, postRecipes, putRecipes, deleteRecipes, getCountry, getRecipeById } from '../controllers/recipesController.js';

const router = express.Router();

router.get('/recipes/countries', getCountry);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes', getRecipes);

router.post('/recipes', postRecipes);
router.put('/recipes', putRecipes);
router.delete('/recipes', deleteRecipes);

router.get('/country', getCountry);
export default router;