import { useState } from "react";

export function useForm(initial: any = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e: any) {
    const { value, name } = e.target;

    setInputs({
      // copy existing state
      ...inputs,
      // this syntax allows us to dynamically update the input that is changing based on the
      // e.target.name of the input that changes. then we just update its state to the current e.target.value
      [name]: value,
    });
  }

  // reset the form. we will use this after the form is submitted
  function resetForm() {
    setInputs(initial);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    setInputs,
  };
}
