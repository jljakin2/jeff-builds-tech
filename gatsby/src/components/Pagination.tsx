import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Pagination() {
  return (
    <PaginationStyles>
      <button>prev</button>
      <div>numbers</div>
      <button>next</button>
    </PaginationStyles>
  );
}
