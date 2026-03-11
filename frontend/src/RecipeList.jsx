import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [search, setSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const toggleIsChecked = () => setIsChecked(v => !v);

  // Fetch recipes avec filtres
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCountry !== "All") {
      params.append("country", selectedCountry);
    }

    if (isChecked) {
      params.append("is_vegan", "true");
    }

    if (search) {
      params.append("q", search);
    }

    fetch(`http://localhost:5000/api/recipes?${params.toString()}`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [selectedCountry, isChecked, search]);

  // 🔹 Fetch countries
  useEffect(() => {
    fetch("http://localhost:5000/api/recipes/countries")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      <h1>🍴 Recettes du monde</h1>

      <input
        type="text"
        className="input"
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <input
        type="checkbox"
        id="is_vegan"
        checked={isChecked}
        onChange={toggleIsChecked}
      />
      <label htmlFor="is_vegan">Plat Végan</label>

      <select onChange={e => setSelectedCountry(e.target.value)}>
        <option value="All">Filter by country</option>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

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
            <p><strong>Pays :</strong> {recipe.country_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;
