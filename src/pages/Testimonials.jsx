import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    text: "Cette application m'a permis de gérer mes consultations médicales sans aucun stress.",
    author: 'Jean Lacroix',
    role: 'Patient régulier',
    rating: 5,
  },
  {
    text: 'Service exceptionnel ! Je recommande vivement cette plateforme à tous mes proches.',
    author: 'Marie Dupont',
    role: 'Patient',
    rating: 5,
  },
  {
    text: "La prise de rendez-vous n'a jamais été aussi simple et rapide. Merci !",
    author: 'Pierre Martin',
    role: 'Patient',
    rating: 5,
  },
];

const TestimonialCard = ({ text, author, role, rating }) => (
  <div className="testimonial-card">
    <div className="testimonial-stars">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={18} className="star-icon" />
      ))}
    </div>
    <p className="testimonial-text">"{text}"</p>
    <div className="testimonial-author">
      <p className="testimonial-name">{author}</p>
      <p className="testimonial-role">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">Témoignages</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
