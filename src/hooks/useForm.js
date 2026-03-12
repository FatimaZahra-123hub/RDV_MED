import { useState, useCallback } from 'react';

export const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(values);
      setValues(initialValues);
    },
    [values, onSubmit, initialValues]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return { values, handleChange, handleSubmit, resetForm };
};
