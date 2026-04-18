import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList.jsx";
import RecipePage from "./pages/RecipePage";
import Account from "./pages/Account";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/user/:id" element={<Account />} />
    </Routes>
  );
}

export default App;
