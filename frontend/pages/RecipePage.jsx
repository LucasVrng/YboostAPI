import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipePage.css";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Erreur lors du fetch de la recette</p>;

  return (
    <main className="container">
      
      <Link to="/recipes" className="back">
        ← Retour aux recettes
      </Link>

      <article className="recipe">
        
        <div className="recipe__header">
          <h1>{recipe.name}</h1>

          <span
            className="material-symbols-outlined favorite"
            onClick={() => setLiked(like => !like)}
            style={{ color: liked ? "red" : "gray" }}
          >
            favorite
          </span>
        </div>

        <div className="recipe__info">
          <p>
            <strong>Pays :</strong> {recipe.country_name}
          </p>
        </div>

        <img src={recipe.image_url} className="recipe__image"></img>

        <div className="recipe__instructions">
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>

      </article>

    </main>
  );
}