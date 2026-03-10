import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';
const Testimonials = () => {
  const testimonials = [
    {
      text: "Cette application m'a permis de gérer mes consultations médicales sans aucun stress.",
      author: "Jean Lacroix",
      role: "Patient régulier",
      rating: 5
    },
    {
      text: "Service exceptionnel ! Je recommande vivement cette plateforme à tous mes proches.",
      author: "Marie Dupont",
      role: "Patient",
      rating: 5
    },
    {
      text: "La prise de rendez-vous n'a jamais été aussi simple et rapide. Merci !",
      author: "Pierre Martin",
      role: "Patient",
      rating: 5
    }
  ];

  return (
    <section id="temoignages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">TÉMOIGNAGES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;