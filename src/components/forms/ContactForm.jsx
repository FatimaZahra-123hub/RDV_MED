import React from 'react';
import { useForm } from '../../hooks/useForm';
import Input from '../ui/Input';
import Button from '../ui/Button';
import './ContactForm.css';

const INITIAL_STATE = { nom: '', telephone: '', email: '', message: '' };

const ContactForm = () => {
  const { values, handleChange, handleSubmit } = useForm(INITIAL_STATE, (data) => {
    console.log('Form submitted:', data);
    alert('Message envoyé avec succès !');
  });

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Input label="Nom" name="nom" value={values.nom} onChange={handleChange} required />
      <Input label="Téléphone" type="tel" name="telephone" value={values.telephone} onChange={handleChange} required />
      <Input label="Adresse e-mail" type="email" name="email" value={values.email} onChange={handleChange} required />
      <Input label="Message" name="message" value={values.message} onChange={handleChange} rows={4} required />
      <Button type="submit" variant="primary" fullWidth>
        Contactez-nous
      </Button>
    </form>
  );
};

export default ContactForm;
