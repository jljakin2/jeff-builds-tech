const validateContactForm = (values: any) => {
  const errors: any = {};

  // is the name missing?
  if (!values.name.trim()) {
    errors.name = "Please make sure the field is complete";
  }

  // is the email missing?
  if (!values.email.trim()) {
    errors.email = "Please make sure the field is complete";
    // is the email in the correct format?
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = "Must be a valid email address";
  }

  // is the subject missing?
  if (!values.subject.trim()) {
    errors.subject = "You must supply a subject";
  }

  // is the message missing?
  if (!values.message.trim()) {
    errors.message = "You must supply a message";
  }

  return errors;
};

export { validateContactForm };
