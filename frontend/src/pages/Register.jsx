import * as React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erreur lors de l'inscription");
        return;
      }

      // Stocke l'utilisateur en localStorage
      localStorage.setItem("user", JSON.stringify({ id: data.userId, username, email }));
      navigate("/recipes/");
    } catch (err) {
      setError("Erreur réseau. Réessayez plus tard.");
      console.error(err);
    }
  };

  return (
    <div className="container-auth">
      <article className="auth-card">
        <h2>Inscription</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label>Identifiant</label>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">S'inscrire</button>
        </form>

        <p className="auth-link">
          Déjà un compte ? <Link to="/auth/login">Se connecter</Link>
        </p>
      </article>
    </div>
  );
}

export default Register;