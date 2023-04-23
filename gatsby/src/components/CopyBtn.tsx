import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const CopyBtnStyles = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--bg);

  display: flex;
  align-items: center;

  svg {
    fill: none;
    stroke: ${({ isCopied }: { isCopied: boolean }) =>
      isCopied ? "var(--secondary-500)" : "var(--inputBorder)"};

    margin-left: 0.25rem;
    transition: 0.2s all ease-in;

    &:hover {
      stroke: ${({ isCopied }: { isCopied: boolean }) =>
        isCopied ? "var(--secondary-500)" : "var(--white)"};
    }
  }
`;

export default function CopyBtn({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <CopyBtnStyles type="button" onClick={handleCopy} isCopied={isCopied}>
      {isCopied && "Copied!"}
      <Icon size="18" name="Copy" />
    </CopyBtnStyles>
  );
}
