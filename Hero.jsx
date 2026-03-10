import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import './Hero.css';    
const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Rendez-vous Santé</h1>
          <p className="text-2xl text-teal-600 mb-2">Facilitez vos prises de rendez-vous</p>
          <p className="text-xl text-gray-600 mb-4">Émigrisme médicaux à l'écran</p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>2026-02-10</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>12:50:42</span>
            </div>
          </div>
          
          <div className="mt-4 text-gray-400 text-sm">
            44 / 1500 H
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;