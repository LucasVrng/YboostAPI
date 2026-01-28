CREATE TABLE IF NOT EXISTS recipeIngredients (
    recipe_id FOREIGN KEY REFERENCES recipes(id),
    ingredient_id FOREIGN KEY REFERENCES ingredients(id)
)