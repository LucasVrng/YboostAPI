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