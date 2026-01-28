CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    time INTEGER NOT NULL,
    instructions TEXT NOT NULL,
    country FOREIGN KEY REFERENCES country(name) NOT NULL,
    image_url NVARCHAR(255),
    how_many INTEGER NOT NULL,
    ingredients TEXT NOT NULL,
    is_vegan BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS recipeIngredients (
    recipe_id FOREIGN KEY REFERENCES recipes(id),
    ingredient_id FOREIGN KEY REFERENCES ingredients(id)
);

CREATE TABLE 'User' (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'username' VARCHAR(255) NOTNULL,
    'password' VARCHAR(255) NOTNULL,
    'email' VARCHAR(255) NOTNULL,
    'verified' BOOLEAN NOT NULL DEFAULT FALSE,
    'favorite' INTEGER(fk) REFERENCES 'UserFav'('id'),
    'admin' BOOLEAN NOT NULL DEFAULT FALSE
)

CREATE TABLE 'UserFav' (
    'user_id' INTEGER(fk) REFERENCES 'User'('id'),
    'recipe_id' INTEGER(fk) REFERENCES 'Recipe'('id')
)

CREATE TABLE 'UserLike' (
    'user_id' INTEGER(fk) REFERENCES 'User'('id'),
    'recipe_id' INTEGER(fk) REFERENCES 'Recipe'('id'),
    'can_like' BOOLEAN NOT NULL DEFAULT TRUE
)

CREATE TABLE 'UserRecipes' (
    user_id INTEGER(fk) REFERENCES 'User'('id'),
    recipe_id INTEGER(fk) REFERENCES 'Recipe'('id')
)

CREATE TABLE IF NOT EXISTS country (
    id PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);