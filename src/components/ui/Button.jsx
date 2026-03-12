import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
