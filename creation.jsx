import React, { useState } from "react";
import "./creation.css";


function Creation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas ❌");
      return;
    }
    else{
        alert("Veuillez remplir tous les champs ❌")
    }


    console.log({ name, email, password });
    alert("Compte créé avec succès ✅");
  };

  return (
    <div className="creation-container">
      <div className="creation-card">
        <h2>Créer un compte</h2>
        <p className="subtitle">Inscrivez-vous pour gérer vos rendez-vous</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nom complet</label>
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="creation-btn" type="submit">
            Créer le compte
          </button>
        </form>

        <p className="footer-text">
          Vous avez déjà un compte ? <span>Se connecter</span>
        </p>
      </div>
    </div>
  );
}

export default Creation;
