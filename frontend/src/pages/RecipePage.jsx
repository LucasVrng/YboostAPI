  import { useEffect, useState } from "react";
  import { useParams, Link } from "react-router-dom";
  import "./RecipePage.css";

  export default function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem("user")|| "null");

    useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => { setRecipe(data); setLoading(false); })
      .catch(() => setLoading(false));
    }, [id]);

    useEffect(() => {
      fetch(`http://localhost:5000/api/recipes/${id}/ingredients`)
        .then(res => res.json())
        .then(data => setIngredients(data));
    }, [id]);

    useEffect(() => {
  if (!user) return;

  fetch(`http://localhost:5000/api/favorites/user/${user.id}`)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        const isFavorite = data.some(
          fav => fav.recipe_id === Number(id)
        );
        setLiked(isFavorite);
      }
    });
}, [id, user]);

    const handleFavorite = async () => {
      try {
        if (!liked) {
        // Ajouter aux favoris
        await fetch("http://localhost:5000/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            favorite: id,
          }),
        });

        setLiked(true);

      } else {
        // Supprimer des favoris
        await fetch(`http://localhost:5000/api/favorites/${user.id}/${id}`, {
          method: "DELETE",
        });
        setLiked(false);
      }
      } catch (error) {
      console.error("Erreur favoris :", error);
    }
  };

    if (loading) return <p>Chargement...</p>;
    if (!recipe) return <p>Erreur lors du fetch de la recette</p>;

    return (
      <main className="container">
        
        <Link to="/recipes" className="back">
          ← Retour aux recettes
        </Link>

        <article className="recipe">
          
          <header className="recipe__header">
            <h1>{recipe.name}</h1>

            {user && (
            <span
              className="material-symbols-outlined favorite"
              onClick={handleFavorite}
              style={{ color: liked ? "red" : "gray" }}
            >
              favorite
            </span>
          )}
          </header>

          <section className="recipe__info">
            <p>
              <strong>Pays :</strong> {recipe.country_name}
            </p>
          </section>

          <img src={recipe.image_url} className="recipe__image"></img>

          <section className="recipe__ingredients">
            <h3>Ingrédients : </h3>
            <ul>
              {ingredients.map(ingredient => (
                <li key={ingredient.id}>
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </section>

          <section className="recipe__instructions">
            <h3>Instructions :</h3>
            <p>{recipe.instructions}</p>
          </section>

        </article>

      </main>
    );
  }