import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const validate = (validationRules) => {
    let tempErrors = {};
    for (let field in validationRules) {
      if (!values[field]) {
        tempErrors[field] = validationRules[field].message || 'This field is required';
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    validate
  };
};

export default useForm;
