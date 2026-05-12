import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import RecipeList from "./RecipeList";
import RecipePage from "./RecipePage";
import RecipeCreation from "./RecipeCreation";
=======
import RecipeList from "./pages/RecipeList.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import RecipeCreation from "./pages/RecipeCreation.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./App.css";
>>>>>>> 4176b88d224fdd15e28d01a74d797e5e27c27149

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
<<<<<<< HEAD
      <Route path="/recipe" element={<RecipeCreation />} />
      <Route path="/recipe/edit/:id" element={<RecipeCreation />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
=======
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/user/:id" element={<Account />} />
      <Route path="/create" element={<RecipeCreation />} />
>>>>>>> 4176b88d224fdd15e28d01a74d797e5e27c27149
    </Routes>
  );
}

export default App;
