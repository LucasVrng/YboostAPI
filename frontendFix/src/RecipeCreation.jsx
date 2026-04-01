import { useMemo, useState } from "react";
import CountryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";

function RecipeCreation() {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    instructions: "",
    country: "",
    image_url: "",
    how_many: "",
    ingredients: "",
    is_vegan: "",
  });

  const { error, setError } = useState("");
  const { loading, setLoading } = useState(false);
  const countries = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const response = await fetch("http://localhost:3000/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false);
      navigate("/recipes");
    } else {
      const error = await response.json();
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="RecipeCreate">
      <h1>Créez votre recette</h1>
      {error && <p className="RecipeCreate__Error">{error}</p>}
      <form className="RecipeCreate__Form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom de la recette"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          type="number"
          id="time"
          name="time"
          placeholder="Temps de cuisson"
          value={formData.time}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          type="text"
          id="instructions"
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <select
          type="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          disabled={loading}
          required
        >
          <option value="">Pays d'origine</option>
          {countries.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="image_url"
          name="image_url"
          placeholder="Image url"
          value={formData.image_url}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          type="text"
          id="how_many"
          name="how_many"
          placeholder="How many"
          value={formData.how_many}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          type="text"
          id="is_vegan"
          name="is_vegan"
          placeholder="Is vegan"
          value={formData.is_vegan}
          onChange={handleChange}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "En cours..." : "Créer"}
        </button>
      </form>
    </main>
  );
}

export default RecipeCreation;

