import React from 'react';
import { Search, Calendar, Shield, Clock, User, MessageSquare } from 'lucide-react';
import './Services.css';   
const Services = () => {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-teal-600" />,
      title: "Recherche de médecins",
      description: "Recherchez et filtrez facilement les médecins selon leurs spécialités et besoins."
    },
  
    {
      icon: <Calendar className="w-10 h-10 text-teal-600" />,
      title: "Planification de rendez-vous",
      description: "Prenez, modifiez ou annulez vos rendez-vous de manière rapide et simple en ligne."
    },   
    {
      icon: <Shield className="w-10 h-10 text-teal-600" />,
      title: "Communication sécurisée",
      description: "Communiquez directement avec vos médecins via notre plateforme sécurisée."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;