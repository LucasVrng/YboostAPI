import * as React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(null);

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email})
    });

    const data = await res.json();

    if (!res.ok) {
        setError(data.message || "Erreur de connexion");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ id: data.userId, username, email }));
    navigate("/recipes/");
}

    return (
        <form onSubmit={handleSubmit}>
            <h2>Inscription</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
                <label htmlFor="login">Identifiant</label>
                <input type="text" placeholder="Mail" value={email} onChange={e => setEmail(e.target.value)}></input>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Connexion</button>
                <p>Déja un compte ? <a href="/login">Se connecter?</a></p>
        </form>
    )
}

export default Register;