import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FormStyles } from "../../styles/FormStyles";
import { useForm } from "../../utils/hooks/useForm";
import { validateContactForm } from "./validateContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactFormStyles = styled.section``;

export default function ContactForm() {
  const { inputs, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);

    // run error validation
    const formErrors = validateContactForm(inputs);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setIsLoading(false);
    }

    if (Object.keys(formErrors).length === 0) {
      try {
        // call to EmailJS so our admin account gets forwarded the messaged
        const emailJSRes = await emailjs.sendForm(
          //@ts-ignore
          process.env.GATSBY_SERVICE_ID,
          process.env.GATSBY_TEMPLATE_ID,
          form.current,
          process.env.GATSBY_PUBLIC_KEY
        );

        setIsLoading(false);
        resetForm();
        toast.success("Message received. Talk soon!");
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        toast.error("Uh oh something went wrong");
      }
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <ContactFormStyles>
        <FormStyles onSubmit={handleSubmit} noValidate ref={form}>
          <fieldset disabled={isLoading}>
            <label htmlFor="name">Name</label>
            <input
              required
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              onKeyDown={() => setErrors({ ...errors, name: "" })}
              style={errors.name ? { border: "2px solid var(--error)" } : {}}
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </fieldset>

          <fieldset disabled={isLoading}>
            <label htmlFor="email">Email</label>
            <input
              required
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              onKeyDown={() => setErrors({ ...errors, email: "" })}
              style={errors.email ? { border: "2px solid var(--error)" } : {}}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </fieldset>

          <fieldset disabled={isLoading}>
            <label htmlFor="email">Subject</label>
            <input
              required
              placeholder="Subject"
              type="text"
              id="subject"
              name="subject"
              value={inputs.subject}
              onChange={handleChange}
              onKeyDown={() => setErrors({ ...errors, subject: "" })}
              style={errors.subject ? { border: "2px solid var(--error)" } : {}}
            />
            {errors.subject && (
              <small className="error">{errors.subject}</small>
            )}
          </fieldset>

          <fieldset disabled={isLoading}>
            <label htmlFor="email">Message</label>
            <textarea
              required
              rows={10}
              cols={30}
              placeholder="Message"
              id="message"
              name="message"
              value={inputs.message}
              onChange={handleChange}
              onKeyDown={() => setErrors({ ...errors, message: "" })}
              style={errors.message ? { border: "2px solid var(--error)" } : {}}
            />
            {errors.message && (
              <small className="error">{errors.message}</small>
            )}
            <input
              type="text"
              name="apple"
              className="apple"
              value={inputs.apple}
              onChange={handleChange}
            />
          </fieldset>
          <button className="primary full-width" type="submit">
            Send
            {/* TODO: add spinning loader */}
          </button>
        </FormStyles>
      </ContactFormStyles>
    </>
  );
}
