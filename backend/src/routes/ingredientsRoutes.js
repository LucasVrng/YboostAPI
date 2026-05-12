import express from 'express';
import { getIngredients, postIngredients, putIngredients, deleteIngredients } from '../controllers/ingredientControllers.js';

const router = express.Router();

// Routes de lecture

router.get('/ingredients', getIngredients);

router.get('/ingredients/:id', getIngredients);

// Routes de modification

router.post('/ingredients', postIngredients);
router.put('/ingredients/:id', putIngredients);
router.delete('/ingredients/:id', deleteIngredients);

export default router;