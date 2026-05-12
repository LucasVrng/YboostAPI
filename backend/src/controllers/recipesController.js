import pool from "../config/db.js";

export const getRecipes = async (req, res) => {
    try {
        const { id } = req.params;
        const { q, country, is_vegan } = req.query;

        let query = `
            SELECT recipes.*, country.name AS country_name
            FROM recipes
            LEFT JOIN country ON recipes.country_id = country.id
        `;
        let conditions = [];
        let values = [];

        if (id) {
            conditions.push('recipes.id = ?');
            values.push(id);
        }
        if (q) {
            conditions.push('recipes.name LIKE ?');
            values.push(`%${q}%`);
        }
        if (country) {
            conditions.push('country.name = ?');
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

        if (id) {
            if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
            return res.json(rows[0]);
        }
        return res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const postRecipes = async (req, res) => {
    try {
        const { name, country, is_vegan } = req.body;
        const [result] = await pool.query('INSERT INTO recipes (name, country, is_vegan) VALUES (?, ?, ?)', [name, country, is_vegan]);
        res.status(201).json({ id: result.insertId, name, country, is_vegan });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const putRecipes = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, country, is_vegan } = req.body;
        await pool.query('UPDATE recipes SET name = ?, country = ?, is_vegan = ? WHERE id = ?', [name, country, is_vegan, id]);
        res.json({ id, name, country, is_vegan });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteRecipes = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM recipes WHERE id = ?', [id]);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getCountry = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT name FROM country');
        res.json(rows.map(row => row.name));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};