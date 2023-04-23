import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Vérification des identifiants et connexion à l'application
    };

    return (
        <div>
            <h1>Page de login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom d'utilisateur:
                    <input type="text" value={username} onChange={handleUsernameChange} required />
                </label>
                <br />
                <label>
                    Mot de passe:
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </label>
                <br />
                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
}

export default Login;
