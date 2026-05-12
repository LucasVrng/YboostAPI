import pool from "../config/db.js";

// Récupérer les ingrédients d'une recette avec les noms et unités
export async function getRecipeIngredients(req, res) {
  const { recipeId } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT i.id, i.name
       FROM recipeIngredients ri
       JOIN ingredients i ON ri.ingredient_id = i.id
       WHERE ri.recipe_id = ?`,
      [recipeId]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

// Ajouter un ingrédient à une recette
export const postRecipeIngredients = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const { ingredientId, quantity } = req.body;
        
        const [result] = await pool.query(
            'INSERT INTO recipeIngredients (recipe_id, ingredient_id, quantity) VALUES (?, ?, ?)', 
            [recipeId, ingredientId, quantity]
        );
        
        res.status(201).json({ 
            id: result.insertId, 
            recipeId, 
            ingredientId, 
            quantity 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Modifier la quantité ou l'ingrédient d'une ligne précise
export const putRecipeIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        const { ingredientId, quantity } = req.body;
        
        await pool.query(
            'UPDATE recipeIngredients SET ingredient_id = ?, quantity = ? WHERE id = ?', 
            [ingredientId, quantity, id]
        );
        
        res.json({ id, ingredientId, quantity });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Supprimer un ingrédient d'une recette
export const deleteRecipeIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM recipeIngredients WHERE id = ?', [id]);
        res.json({ message: 'Ingrédient retiré de la recette avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};