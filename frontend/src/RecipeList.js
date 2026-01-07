import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🍴 Recettes du monde</h1>

      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 15,
              marginBottom: 15,
              cursor: "pointer"
            }}
          >
            <h2>{recipe.name}</h2>
            <p><strong>Pays :</strong> {recipe.country}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;
