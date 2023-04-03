import React from "react";
import styled from "styled-components";

const TagStyles = styled.div`
  background: ${({ active }: any) =>
    active ? "var(--primary-500)" : "var(--white)"};
  color: ${({ active }: any) => (active ? "var(--white)" : "var(--text)")};
  border: ${({ active }: any) =>
    active ? "1px solid var(--primary-500)" : "1px solid var(--inputBorder)"};
  border-radius: 8rem;
  cursor: pointer;

  padding: 0.5rem 1rem;

  transition: all 0.2s ease-in;

  &:hover {
    background: var(--bg);
  }
`;

interface TagProps {
  name: string;
  active?: boolean;
}

export default function Tag({ name, active }: TagProps) {
  return (
    // @ts-expect-error
    <TagStyles active={active}>
      <p>{name}</p>
    </TagStyles>
  );
}
