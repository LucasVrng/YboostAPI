import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(``);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🍴 Recettes du monde</h1>

      <select name="countries" id="countries">
        <option value="">--Please choose an option</option>
        <option value="France">France</option>
        <option value="Espagne">Espagne</option>
        <option value="Italie">Italie</option>
        <option value="Portugal">Portugal</option>
        <option value="Maroc">Maroc</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="Russie">Russie</option>
        <option value="Japon">Japon</option>
        <option value="Chine">Chine</option>
        <option value="Brésil">Brésil</option>
      </select>

      <input type="checkbox" id="isVegan">
        <label for="isVegan">Is Vegan</label> 
      </input>

  <select name="time" id="time">
    <option value="5">Less Than 5 Minutes</option>
    <option value="5and10">Between 5 Minutes And 10 minutes</option>
    <option value="10and30">Between 10 Minutes And 30 minutes</option>
  </select>

      <input
            type="text"
            className="input"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
            {recipes
              .filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
              .map(recipe => (
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
