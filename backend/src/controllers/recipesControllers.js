import pool from "../config/db.js";

export const getRecipes = async (req, res) => {
    try {
        const { id } = req.params;
        const { q, country, is_vegan } = req.query;

        let query = 'SELECT * FROM recipes';
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
        if (country) {
            conditions.push('country = ?');
            values.push(country);
        }
        if (is_vegan) {
            conditions.push('is_vegan = ?');
            values.push(is_vegan === 'true' ? 1 : 0);
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
