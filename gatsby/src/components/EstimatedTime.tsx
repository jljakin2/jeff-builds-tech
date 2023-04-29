import React from "react";
import styled from "styled-components";
import { estimateReadingTime } from "../utils/estimateReadingTime";
import Icon from "./Icon";

const EstimatedTimeStyles = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  svg {
    fill: transparent;
    stroke: var(--lightText);
  }
`;

export default function EstimatedTime({ post }: any) {
  return (
    <EstimatedTimeStyles>
      <Icon name="Clock" size="16" />
      <p>{estimateReadingTime(post)} min</p>
    </EstimatedTimeStyles>
  );
}
