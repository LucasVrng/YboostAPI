import * as React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(null);

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, email})
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.message || "Erreur de connexion");
            return;
        }

        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/recipes/");
    }

    return (
        <div className="container-auth">
            <article className="auth-card">
                <h2>Connexion</h2>

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <label>Identifiant</label>
                    <input 
                        type="text"
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <label>Email</label>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label>Mot de passe</label>
                    <input 
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit">Connexion</button>
                </form>

                <p className="auth-link">
                    Pas de compte ? <Link to="/auth/register">S'inscrire</Link>
                </p>
            </article>
        </div>
    );
}

export default Login;