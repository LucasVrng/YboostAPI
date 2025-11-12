import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🍴 Recettes du Monde</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", borderRadius: 10, padding: 10, margin: "10px 0" }}>
          <h2>{recipe.name} 🇨🇵 {recipe.country}</h2>
          <h4>Ingrédients :</h4>
          <ul>
            {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
          <p><strong>Préparation :</strong> {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
