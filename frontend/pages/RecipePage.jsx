import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipePage.css";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}/ingredients`)
      .then(res => res.json())
      .then(data => setIngredients(data));
  }, [id]);

  if (!recipe) return <p>Erreur lors du fetch de la recette</p>;

  return (
    <main className="container">
      
      <Link to="/recipes" className="back">
        ← Retour aux recettes
      </Link>

      <article className="recipe">
        
        <header className="recipe__header">
          <h1>{recipe.name}</h1>

          <span
            className="material-symbols-outlined favorite"
            onClick={() => setLiked(like => !like)}
            style={{ color: liked ? "red" : "gray" }}
          >
            favorite
          </span> 
        </header>

        <section className="recipe__info">
          <p>
            <strong>Pays :</strong> {recipe.country_name}
          </p>
        </section>

        <img src={recipe.image_url} className="recipe__image"></img>

        <section className="recipe__ingredients">
          <h3>Ingrédients</h3>
          <ul>
            {ingredients.map(ingredient => (
              <li key={ingredient.id}>
                {ingredient.name} — {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </section>

        <section className="recipe__instructions">
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </section>

      </article>

    </main>
  );
}