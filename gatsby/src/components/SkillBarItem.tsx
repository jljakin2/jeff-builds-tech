import React from "react";
import styled from "styled-components";

const SkillBarItemStyles = styled.div``;

export default function SkillBarItem({ skillItem }: any) {
  return (
    <SkillBarItemStyles>
      <p>{skillItem.name ? skillItem.name : skillItem.tag.name}</p>
      <div
        className="skill-bar-level"
        style={{
          width: `${skillItem.level * 100}%`,
          background: "blue",
          height: "4px",
        }}
      />
    </SkillBarItemStyles>
  );
}
