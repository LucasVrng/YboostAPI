import { Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipePage from "./RecipePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Routes>
  );
}

export default App;
