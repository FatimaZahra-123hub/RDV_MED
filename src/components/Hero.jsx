import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Rendez-vous <span className="hero-accent">Santé</span>
        </h1>
        <p className="hero-subtitle">Facilitez vos prises de rendez-vous médicaux</p>
        <p className="hero-description">
          Trouvez un médecin, réservez en ligne et gérez vos consultations en toute simplicité.
        </p>

        <div className="hero-actions">
          <Button variant="primary">
            Prendre rendez-vous <ArrowRight size={18} />
          </Button>
          <Button variant="outline">En savoir plus</Button>
        </div>

        <div className="hero-meta">
          <span className="hero-meta-item">
            <Calendar size={16} /> Disponible 24/7
          </span>
          <span className="hero-meta-item">
            <Clock size={16} /> Confirmation instantanée
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
