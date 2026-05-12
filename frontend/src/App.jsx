import { Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipePage from "./RecipePage";
import RecipeCreation from "./RecipeCreation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe" element={<RecipeCreation />} />
      <Route path="/recipe/edit/:id" element={<RecipeCreation />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Routes>
  );
}

export default App;
