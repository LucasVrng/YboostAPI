import pool from "../config/db.js"

export const getRecipeIngredients = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const [rows] = await pool.query(
    `SELECT ri.id, i.name, ri.quantity, i.unit 
     FROM recipe_ingredients ri 
     JOIN ingredients i ON ri.ingredient_id = i.id 
     WHERE ri.recipe_id = ?`, 
    [recipeId]
    );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const postRecipeIngredients = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const { ingredientId, quantity } = req.body;
        const [result] = await pool.query('INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity) VALUES (?, ?, ?)', [recipeId, ingredientId, quantity]);
        res.status(201).json({ id: result.insertId, recipeId, ingredientId, quantity });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const putRecipeIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        const { ingredientId, quantity } = req.body;
        await pool.query('UPDATE recipe_ingredients SET ingredient_id = ?, quantity = ? WHERE id = ?', [ingredientId, quantity, id]);
        res.json({ id, ingredientId, quantity });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};  

export const deleteRecipeIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM recipe_ingredients WHERE id = ?', [id]);
        res.json({ message: 'Recipe ingredient deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

