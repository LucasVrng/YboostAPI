import express from 'express';
import { getIngredients, postIngredients, putIngredients, deleteIngredients } from '../controllers/ingredientControllers.js';

const router = express.Router();

router.get('/ingredients', getIngredients);
router.get('/ingredients/:id', getIngredients);
router.get('/ingredients?q={name}', getIngredients);
router.get('/ingredients?country={choice}', getIngredients);
router.get('/ingredients?is_vegan=true', getIngredients);

router.post('/ingredients', postIngredients);
router.put('/ingredients', putIngredients);
router.delete('/ingredients', deleteIngredients);

export default router;