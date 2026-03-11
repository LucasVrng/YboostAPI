import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Erreur lors du fetch de la recette</p>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">← Retour</Link>

      <h1>{recipe.name}</h1>
      <p><strong>Pays :</strong> {recipe.country_name}</p>

      <h3>Ingrédients</h3>
      <ul>
        {recipe.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      <p>
        <strong>Préparation :</strong><br />
        {recipe.instructions}
      </p>
    </div>
  );
}

export default RecipePage;
