import express from 'express';
import { getRecipes, postRecipes, putRecipes, deleteRecipes, getCountry, getRecipeById } from '../controllers/recipesController.js';

const router = express.Router();

router.get('/countries', getCountry);
router.get('/:id', getRecipeById);
router.get('/', getRecipes);

router.post('/', postRecipes);
router.put('/', putRecipes);
router.delete('/', deleteRecipes);
export default router;