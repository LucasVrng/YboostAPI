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
