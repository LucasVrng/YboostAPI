import express from 'express';
import { getRecipes } from '../controllers/recipesControllers.js';

const router = express.Router();

router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipes);
router.get('/recipes?q={name}', getRecipes);
router.get('/recipes?country={choice}', getRecipes);
router.get('/recipes?is_vegan=true', getRecipes);
router.get('/recipes/{id}/ingredients', getRecipes);

router.post('/recipes', postRecipes);
router.put('/recipes', putRecipes);
router.delete('/recipes', deleteRecipes);

router.get('/country', getCountry);
export default router;