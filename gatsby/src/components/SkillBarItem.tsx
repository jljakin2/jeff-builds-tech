import React from "react";
import styled from "styled-components";

const SkillBarItemStyles = styled.div`
  display: grid;
  row-gap: 0.25rem;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 25px;
    letter-spacing: 1.28571px;
  }

  .skill-bar-level {
    background: ${({ isTech }: { isTech: boolean }) =>
      isTech ? "var(--primary-500)" : "var(--secondary-500)"};

    height: 16px;
  }
`;

export default function SkillBarItem({ skillItem }: any) {
  return (
    // @ts-ignore
    <SkillBarItemStyles isTech={skillItem.isTech}>
      <p>{skillItem.name ? skillItem.name : skillItem.tag.name}</p>
      <div
        className="skill-bar-level"
        style={{
          width: `${skillItem.level * 100}%`,
        }}
      />
    </SkillBarItemStyles>
  );
}
