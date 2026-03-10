import React from 'react';

import './About.css';
const About = () => {
  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">À propos de nous</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Rendez-vous Santé est une plateforme innovante qui simplifie la gestion des rendez-vous médicaux. 
            Elle permet de rechercher des médecins selon leurs spécialités et emplacements, de prendre ou 
            modifier des rendez-vous en ligne, et d'établir une communication efficace avec les professionnels 
            de santé. Notre service assure une prise en charge rapide et personnalisée pour tous vos besoins 
            médicaux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;