import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';  

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  const locations = [
    "Hôpital privé Bab",
    "Café veranda",
    "La pescada",
    "Zahwa",
    "Faculté des Lettres et des Sciences",
    "Meknès"
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">CONTACT</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse e-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition font-semibold"
              >
                CONTACTEZ-NOUS
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-1" />
                  <span className="text-gray-700">Mékné, Fès-Meknès, Maroc</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">+212-605329338</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">lazaarfatimazahra4@gmail.com</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-teal-600 mt-1" />
                  <span className="text-gray-700">Lundi au Vendredi - de 9h00 à 15h00</span>
                </div>
              </div>
            </div>
            
            {/* Locations */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Nos emplacements</h3>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="text-gray-600 hover:text-teal-600 cursor-pointer">
                    {location}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;