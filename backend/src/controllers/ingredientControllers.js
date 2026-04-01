import pool from "../config/db.js";

export const getIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        const { q } = req.query;

        let query = 'SELECT * FROM ingredients';
        let conditions = [];
        let values = [];

        if (id) {
            conditions.push('id = ?');
            values.push(id);
        }
        if (q) {
            conditions.push('name LIKE ?');
            values.push(`%${q}%`);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        const [rows] = await pool.query(query, values);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const postIngredients = async (req, res) => {
    try {
        const { name } = req.body;
        const [result] = await pool.query('INSERT INTO ingredients (name) VALUES (?)', [name]);
        res.status(201).json({ id: result.insertId, name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const putIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await pool.query('UPDATE ingredients SET name = ? WHERE id = ?', [name, id]);
        res.json({ id, name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};  

export const deleteIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM ingredients WHERE id = ?', [id]);
        res.json({ message: 'Ingredient deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

