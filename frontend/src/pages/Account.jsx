import { Link } from "react-router-dom";
import "./Account.css";

export default function Account() {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) return <p>Non connecté</p>;

    return (
        <div className="account-container">
            <Link to="/recipes" className="back-button">
                Retour aux recettes
            </Link>

            <h1 className="account-title">
                Profil utilisateur
            </h1>

            <p className="account-info">
                Username: {user.username}
            </p>

            <p className="account-info">
                Email: {user.email}
            </p>

            <p className="account-info">
                Rôle: {user.admin ? "Admin" : "Utilisateur"}
            </p>
        </div>
    );
}