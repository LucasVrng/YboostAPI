import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import RecipeCreation from "./pages/RecipeCreation.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe" element={<RecipeCreation />} />
      <Route path="/recipe/edit/:id" element={<RecipeCreation />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/user/:id" element={<Account />} />
      <Route path="/create" element={<RecipeCreation />} />
    </Routes>
  );
}

export default App;
