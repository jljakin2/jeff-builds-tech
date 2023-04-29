import styled from "styled-components";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  width: 100%;

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    row-gap: 0.5rem;
    position: relative;

    width: 100%;
    padding: 0;

    & label {
      color: var(--text);
    }

    & small {
      position: absolute;
      bottom: -18px;
      left: 0;
    }
  }

  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="password"] {
    background: var(--bg);
    border: 1px solid var(--bg);
    font-family: inherit;
    font-size: 0.85rem;
    color: inherit;
    cursor: text;
    box-shadow: var(--inner-shadow);

    width: 100%;
    padding: 1rem;

    &::placeholder {
      color: var(--veryLightText);
    }
  }

  textarea {
    border: 1px solid var(--bg);
    box-shadow: var(--inner-shadow);
    font-family: inherit;
    font-size: 0.85rem;
    background: var(--bg);
    color: inherit;
    padding: 1rem;
    resize: none;

    &::placeholder {
      color: var(--veryLightText);
    }
  }
`;
