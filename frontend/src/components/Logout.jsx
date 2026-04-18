import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <button onClick={handleLogout}>Se déconnecter</button>
  );
}

export default Logout;