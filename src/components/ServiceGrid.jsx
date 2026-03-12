import React from 'react';
import { Search, Calendar, Shield } from 'lucide-react';
import Card from './ui/Card';
import './ServiceGrid.css';

const SERVICES = [
  {
    icon: <Search size={40} />,
    title: 'Recherche de médecins',
    description: 'Recherchez et filtrez facilement les médecins selon leurs spécialités et besoins.',
  },
  {
    icon: <Calendar size={40} />,
    title: 'Planification de rendez-vous',
    description: 'Prenez, modifiez ou annulez vos rendez-vous de manière rapide et simple en ligne.',
  },
  {
    icon: <Shield size={40} />,
    title: 'Communication sécurisée',
    description: 'Communiquez directement avec vos médecins via notre plateforme sécurisée.',
  },
];

const ServiceGrid = () => {
  return (
    <section className="section service-section">
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <div className="service-grid">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
