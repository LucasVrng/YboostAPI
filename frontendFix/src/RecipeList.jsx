import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(``);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Impossible de charger les recettes : ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Chargement...</p>;
  if (error) return <p style={{ padding: 20, color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>🍴 Recettes du monde</h1>

      <input
        type="text"
        className="input"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      {recipes
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(search.toLowerCase()),
        )
        .map((recipe) => (
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
                cursor: "pointer",
              }}
            >
              <h2>{recipe.name}</h2>
              <p>
                <strong>Pays :</strong> {recipe.country}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default RecipeList;
