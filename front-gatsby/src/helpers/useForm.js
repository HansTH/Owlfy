import { useState } from 'react';

// update input fields for contact form
export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);

  function updateInputValues(e) {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  console.log(inputs);

  return {
    updateInputValues,
    inputs,
    resetForm,
  };
}
