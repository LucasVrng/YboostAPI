import express from 'express';
import { getRecipes, postRecipes, putRecipes, deleteRecipes, getCountry, getRecipeById } from '../controllers/recipesController.js';

const router = express.Router();

router.get('/', getRecipes);
router.get('/countries', getCountry);
router.get('/:id', getRecipeById);

router.post('/', postRecipes);
router.put('/:id', putRecipes);
router.delete('/:id', deleteRecipes);
export default router;