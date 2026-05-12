import React from 'react';

function RecipeDetails({ recipe, onClose }) {
  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
}

export default RecipeDetails;
