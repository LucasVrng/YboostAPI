import { Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipePage from "./RecipePage";
import RecipeCreation from "./RecipeCreation";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/create" element={<RecipeCreation />} />
    </Routes>
  );
}

export default App;
