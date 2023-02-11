import React from "react";
import styled from "styled-components";

const RoleItemStyles = styled.div``;

export default function RoleItem({ roleItem }: any) {
  return (
    <RoleItemStyles>
      <h5>{roleItem.title}</h5>
      <ul>
        {roleItem.responsibilities.map((resp: any) => {
          return <li>{resp}</li>;
        })}
      </ul>
    </RoleItemStyles>
  );
}
