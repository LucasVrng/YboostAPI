import express from 'express';
import { 
    getRecipes, 
    postRecipes, 
    putRecipes, 
    deleteRecipes, 
    getCountry 
} from '../controllers/recipesControllers.js';

const router = express.Router();

// Routes de lecture
router.get('/recipes', getRecipes);
router.get('/country', getCountry);
router.get('/recipes/:id', getRecipes);

// Routes de modification
router.post('/recipes', postRecipes);
router.put('/recipes/:id', putRecipes);
router.delete('/recipes/:id', deleteRecipes);

export default router;