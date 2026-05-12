import express from 'express';
import { 
    getRecipeIngredients, 
    postRecipeIngredients, 
    putRecipeIngredients, 
    deleteRecipeIngredients 
} from '../controllers/recipeIngredientControllers.js';

const router = express.Router();

// Récupérer tous les ingrédients d'une recette spécifique
router.get('/recipes/:recipeId/ingredients', getRecipeIngredients);

// Ajouter un ingrédient à une recette
router.post('/recipes/:recipeId/ingredients', postRecipeIngredients);

// Modifier ou supprimer une ligne spécifique
router.put('/recipes/ingredients/:id', putRecipeIngredients);
router.delete('/recipes/ingredients/:id', deleteRecipeIngredients);

export default router;