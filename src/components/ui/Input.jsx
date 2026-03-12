import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', name, value, onChange, required = false, rows }) => {
  const id = `field-${name}`;

  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      {rows ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className="form-input form-textarea"
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="form-input"
        />
      )}
    </div>
  );
};

export default Input;
