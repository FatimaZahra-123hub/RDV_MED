import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-layout">
          <div className="contact-info">
            <h3>Besoin d'aide ?</h3>
            <p>
              N'hésitez pas à nous contacter pour toute question concernant nos
              services ou pour prendre rendez-vous.
            </p>
            <div className="contact-details">
              <p><strong>Email :</strong> contact@rdv-sante.fr</p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Adresse :</strong> 12 Rue de la Santé, Paris</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
