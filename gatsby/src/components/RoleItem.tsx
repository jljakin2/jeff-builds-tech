import React from "react";
import styled from "styled-components";

const RoleItemStyles = styled.div`
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  display: grid;
  row-gap: 1rem;

  padding: 1.5rem 1rem;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    li {
      color: var(--lightText);

      display: flex;
      column-gap: 0.5rem;
    }

    li::before {
      content: "-";
      color: var(--lightText);

      margin-top: 2px;
    }
  }
`;

export default function RoleItem({ roleItem }: any) {
  return (
    <RoleItemStyles>
      <h5>{roleItem.title}</h5>
      <ul>
        {roleItem.responsibilities.map((resp: any, idx: number) => {
          return (
            <li key={idx}>
              <p>{resp}</p>
            </li>
          );
        })}
      </ul>
    </RoleItemStyles>
  );
}
