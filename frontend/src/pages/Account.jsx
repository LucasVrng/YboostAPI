import { Link } from "react-router-dom";

export default function Account() {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    console.log(user);

    if (!user) return <p>Non connecté</p>;

    return (
        <>
        <button>
            <Link
            to={"/recipes"}
            >Retournez aux recettes</Link>
        </button>
            <h1>Username: {user.username}</h1>
            <h2>Email: {user.email}</h2>
            <h2>Rôle: {user.admin ? "Admin" : "Utilisateur"}</h2>
        </>
    )
}