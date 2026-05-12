import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
      .catch(error => {
        console.error("Erreur de connexion avec l'API backend :", error);
      });
  }, [id]);

  if (!recipe) return <p>Chargement...</p>;

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">← Retour</Link>
        <Link to={`/recipe/edit/${id}`}>Modifier la recette</Link>
      </div>

      <h1>{recipe.name}</h1>
      <p><strong>Pays :</strong> {recipe.country}</p>

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
