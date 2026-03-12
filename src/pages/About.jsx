import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <h2 className="section-title">À propos de nous</h2>
        <div className="about-content">
          <p>
            Rendez-vous Santé est une plateforme innovante qui simplifie la
            gestion des rendez-vous médicaux. Elle permet de rechercher des
            médecins selon leurs spécialités et emplacements, de prendre ou
            modifier des rendez-vous en ligne, et d'établir une communication
            efficace avec les professionnels de santé.
          </p>
          <p>
            Notre service assure une prise en charge rapide et personnalisée
            pour tous vos besoins médicaux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
