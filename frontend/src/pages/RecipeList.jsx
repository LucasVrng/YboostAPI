import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";
import Logout from "../components/Logout.jsx";

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

  // Fetch countries
  useEffect(() => {
    fetch("http://localhost:5000/api/recipes/countries")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <main className="container">
      
      <header className="header">
        <h1>🍴 Recettes du monde</h1>

        {user ? (
          <article className="auth">
            <Link to={`/user/${user.id}`}>Mon Profil</Link>
            <Logout />
            <Link to={`/recipes/create`}>Créer une recette</Link>
          </article>
        ) : (
          <article className="auth">
            <Link to="/auth/login">Se connecter</Link>
            <Link to="/auth/register">S'inscrire</Link>
          </article>
        )}
      </header>

      <section className="filters">

        <article className="search">
          <span className="search-icon material-symbols-outlined">
            search
          </span>

          <input
            type="text"
            className="search-input"
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher une recette..."
          />
        </article>

        <article className="checkbox">
          <input
            type="checkbox"
            id="is_vegan"
            checked={isChecked}
            onChange={toggleIsChecked}
          />
          <label htmlFor="is_vegan">Plat Végan</label>
        </article>

        <select
          onChange={e => setSelectedCountry(e.target.value)}
        >
          <option value="All">Tous les pays</option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

      </section>

      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <article className="recipe-card">
            <h2>{recipe.name}</h2>
            <p>
              <strong>Pays :</strong> {recipe.country_name}
            </p>
          </article>
        </Link>
      ))}

    </main>
  );
}

export default RecipeList;